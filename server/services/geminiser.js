import OpenAI from "openai";

export const analyzePCB = async (file) => {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      throw new Error(
        "OPENROUTER_API_KEY is missing. Check your .env file."
      );
    }

    const client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const imageBase64 = file.buffer.toString("base64");

    const completion = await client.chat.completions.create({
      model: "google/gemma-3-27b-it:free", // You can change this later

      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `
Analyze the uploaded PCB image.

Return ONLY valid JSON in this format:

{
  "pcbType": "",
  "components": [],
  "missingComponents": [],
  "faults": [],
  "suggestions": [],
  "confidence": ""
}

Rules:
- Return only valid JSON.
- Do not use markdown.
- Do not add explanations.
`,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${file.mimetype};base64,${imageBase64}`,
              },
            },
          ],
        },
      ],
    });

    let text = completion.choices[0].message.content;

    if (!text) {
      throw new Error("No response received from OpenRouter.");
    }

    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(text);
    } catch (err) {
      console.error("Response was:", text);
      throw new Error("OpenRouter returned invalid JSON.");
    }
  } catch (error) {
    console.error("OpenRouter Error:", error.message);
    throw error;
  }
};