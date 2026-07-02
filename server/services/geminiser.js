import { GoogleGenAI } from "@google/genai";

export const analyzePCB = async (file) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing.");
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const imageBytes = file.buffer;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: file.mimetype,
                data: imageBytes.toString("base64"),
              },
            },
            {
              text: `
You are an expert PCB inspection AI.

Analyze the uploaded PCB image carefully.

Identify:
- PCB type
- Components present
- Missing components
- Faults or damaged areas
- Suggestions for repair
- Confidence score (0-100%)

Return ONLY valid JSON.

{
  "pcbType": "",
  "components": [],
  "missingComponents": [],
  "faults": [],
  "suggestions": [],
  "confidence": ""
}

Rules:
- Return only JSON.
- Do not use markdown.
- Do not add explanations.
`,
            },
          ],
        },
      ],
    });

    let text = response.text;

    if (!text) {
      throw new Error("No response received from Gemini.");
    }

    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");

    if (start !== -1 && end !== -1) {
      text = text.substring(start, end + 1);
    }

    console.log("Gemini Response:");
    console.log(text);

    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error(error.message);
  }
};