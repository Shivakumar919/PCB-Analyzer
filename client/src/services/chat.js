import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/chat`;

export const askPCBQuestion = async (analysis, question) => {
  try {
    const response = await axios.post(API_URL, {
      analysis,
      question,
    });

    return response.data;
  } catch (error) {
    console.error("Chat Error:", error);

    throw (
      error.response?.data || {
        message: "Failed to get AI response.",
      }
    );
  }
};