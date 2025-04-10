import mongoose from "mongoose";

const BoatLocationSchema = new mongoose.Schema(
  {
    fisherman: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fisherman",
      required: true,
    },
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
);

export default mongoose.model("BoatLocation", BoatLocationSchema);
