import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.js";

import connectDB from "./confi/db.js";
import authRoutes from "./routes/autheroutes.js";
import analysisRoutes from "./routes/analysisroute.js";
import errorHandler from "./middlerwares/errorhandle.js";

dotenv.config();


connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("PCB Analyzer API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", analysisRoutes);
app.use("/api/chat", chatRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});