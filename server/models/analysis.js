import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    pcbType: {
      type: String,
      default: "",
    },

    components: {
      type: [String],
      default: [],
    },

    missingComponents: {
      type: [String],
      default: [],
    },

    faults: {
      type: [String],
      default: [],
    },

    suggestions: {
      type: [String],
      default: [],
    },

    confidence: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;