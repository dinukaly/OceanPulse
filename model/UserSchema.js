import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,  
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },

    avator:{
        type:Object //[{hash, resourceUrl, directory, filename}]
    },
    password: {
        type:String,
        required:true
        
    },
    isActive: {
      type: Boolean,
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

    emergencyContact: {
      name: String,
      phone: String,
    },
  },
);

export default mongoose.model("User", UserSchema);
