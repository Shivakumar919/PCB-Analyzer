import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./confi/db.js";
import authRoutes from "./routes/autheroutes.js";
import analysisRoutes from "./routes/analysisroute.js";
import chatRoutes from "./routes/chat.js";
import errorHandler from "./middlerwares/errorhandle.js";

dotenv.config();

connectDB();

const app = express();

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://pcbanalyzer.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Test Route
app.get("/", (req, res) => {
  res.send("PCB Analyzer API is running...");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api", analysisRoutes);
app.use("/api/chat", chatRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});