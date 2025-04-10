import mongoose from "mongoose";

const SosAlertSchema = new mongoose.Schema(
  {
    fisherman: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fisherman",
      required: true,
    },
    location: {
      lat: Number,
      lng: Number,
    },
    status: {
      type: String,
      enum: ["Pending", "Acknowledged", "Resolved"],
      default: "Pending",
    },
    emergencyType: {
      type: String,
      default: "General Emergency",
    },
  },
);

export default mongoose.model("SOSAlert", SosAlertSchema);
