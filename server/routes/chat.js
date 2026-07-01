import express from "express";
import { chatWithPCB } from "../controllers/chatcontroller.js";

const router = express.Router();

router.post("/", chatWithPCB);

export default router;