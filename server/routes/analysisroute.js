import express from "express";
import { analyzeImage } from '../controllers/analycontrol.js';
import auth from "../middlerwares/authe.js";
import upload from "../middlerwares/upload.js";

const router = express.Router();

// Analyze PCB Image
router.post(
  "/analyze",
  auth,
  upload.single("image"),
  (req, res, next) => {
    console.log("✅ /api/analyze route reached");
    next();
  },
  analyzeImage
);

export default router;