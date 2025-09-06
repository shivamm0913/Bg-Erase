import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/bg-erase`);

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
