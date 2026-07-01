import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const chatWithPCB = async (req, res) => {
  try {
    const { analysis, question } = req.body;

    if (!analysis || !question) {
      return res.status(400).json({
        message: "Analysis and question are required.",
      });
    }

    const prompt = `
You are an expert PCB engineer.

PCB Analysis:
${JSON.stringify(analysis, null, 2)}

User Question:
${question}

Instructions:
- Answer only from the PCB analysis and general electronics knowledge.
- Keep the answer short and accurate.
- If the answer cannot be determined from the analysis, clearly say so.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.status(200).json({
      answer: response.text,
    });
  } catch (error) {
    console.error("Chat Error:", error);

    res.status(500).json({
      message: error.message,
      details: error,
    });
  }
};