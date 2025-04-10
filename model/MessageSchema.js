import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fisherman",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fisherman",
    },
    message: {
      type: String,
      required: true,
    },
  },
);

export default mongoose.model("Message", MessageSchema);
