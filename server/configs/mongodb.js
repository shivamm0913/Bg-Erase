import mongoose from "mongoose";

let isConnected = false; // cache connection

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing DB connection");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/bg-erase`);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    throw err;
  }
};

export default connectDB;
