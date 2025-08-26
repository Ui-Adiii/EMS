"use server"
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const userMiddleware = async (req) => {
  const token = req.cookies.get("access_token")?.value;
  
  if (!token) {
    return NextResponse.json({ message: "Unauthorized",success:false });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;

    return {
      success:true,
      message:"User authenticated successfully"
    }
  } catch (error) {
    return NextResponse.json({
        message:error.message,
        success:false
    })
}
};
export default userMiddleware;