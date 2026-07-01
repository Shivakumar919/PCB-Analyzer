import fs from "fs";
import path from "path";
import Analysis from "../models/analysis.js";
import { analyzePCB } from "../services/geminiser.js";
console.log("✅ analyzeImage controller started");
export const analyzeImage = async (req, res) => {
  try {
    let image;
    // Case 1: Uploaded file
    if (req.file) {
      image = req.file;
    }

    // Case 2: Sample image from frontend
    else if (req.body.sampleImage) {
      const imagePath = path.join(
        process.cwd(),
        "public",
        req.body.sampleImage
      );

      if (!fs.existsSync(imagePath)) {
        return res.status(404).json({
          success: false,
          message: "Sample image not found",
        });
      }

      image = {
        path: imagePath,
        filename: path.basename(imagePath),
        mimetype: "image/jpeg",
      };
    }

    // No image provided
    else {
      return res.status(400).json({
        success: false,
        message: "Please upload or select a PCB image",
      });
    }
    console.log("File:", req.file);
console.log("Body:", req.body);

    // Gemini Analysis
    const result = await analyzePCB(image);

    // Save to DB
    await Analysis.create({
      user: req.user?.id || null,
      image: image.filename,
      result,
    });

    // Response
    return res.status(200).json({
      success: true,
      message: "PCB analyzed successfully",
      analysis: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};