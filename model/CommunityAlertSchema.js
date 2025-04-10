import mongoose from "mongoose";

const CommunityAlertSchema = new mongoose.Schema(
  {
    fisherman: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fisherman",
    },
    alertType: {
      type: String,
      //enum: ["Rough Waves", "Missing Boat", "Illegal Activity", "Other"],
      //default: "Other",
    },
    message: {
      type: String,
      required: true,
    },
    location: {
      lat: Number,
      lng: Number,
    },
  },
);

export default mongoose.model("CommunityAlert", CommunityAlertSchema);
