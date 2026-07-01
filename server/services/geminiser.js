import fs from "fs";
import { GoogleGenAI } from "@google/genai";

export const analyzePCB = async (file) => {
  try {
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
Analyze the uploaded PCB image.

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
- Do not use \`\`\`json.
- Do not add explanations.
`,
            },
          ],
        },
      ],
    });

    // Get Gemini response
    const text = response.text;

    // console.log("========== GEMINI RAW RESPONSE ==========");
    // console.log(text);
    // console.log("=========================================");

    // Remove markdown if Gemini returns it
    const cleanText = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let result;

    try {
      result = JSON.parse(cleanText);
    } catch (err) {
      console.error("JSON Parse Error:", err);

      throw new Error(
        "Gemini returned an invalid JSON response."
      );
    }

    // console.log("========== PARSED RESULT ==========");
 
    // console.log("===================================");

    return result;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};