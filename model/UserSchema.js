import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    language: {
      type: String,
      enum: ["Sinhala", "Tamil"],
      default: "Sinhala",
    },
    boatId: String, // Only applicable to fishermen

    role: {
      type: String,
      enum: ["fisherman", "coast-guard", "admin"],
      default: "fisherman",
    },

    emergencyContact: {
      name: String,
      phone: String,
    },
  },
);

export default mongoose.model("User", UserSchema);
