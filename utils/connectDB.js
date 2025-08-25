import mongoose from "mongoose";

let isConnected = false; 
export async function connectDB() {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
    isConnected = true;
    console.log("✅ DB Connected Successfully");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
  }
}