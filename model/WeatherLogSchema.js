import mongoose from "mongoose";

const WeatherLogSchema = new mongoose.Schema(
  {
    location: {
      lat: Number,
      lng: Number,
    },
    weather: {
      temperature: Number,
      windSpeed: Number,
      waveHeight: Number,
      condition: String,
    },
    source: {
      type: String,
      default: "OpenWeather",
    },
  },
);

export default mongoose.model("WeatherLog", WeatherLogSchema);
