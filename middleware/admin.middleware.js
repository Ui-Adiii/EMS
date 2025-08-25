"use server";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import userMiddleware from "./user.middleware";
const adminMiddleware = async (req) => {
  userMiddleware(req);
  if (!req.userId) {
    return NextResponse.json({ message: "Unauthorized", success: false });
  }
  const token = req.cookies.get("role")?.value;
  if (!token) {
    return NextResponse.json({ message: "Unauthorized", success: false });
  }
  try {
    if (token !== "admin") {
      return NextResponse.json({
        message: "you are not admin",
        success: false
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
};
export default adminMiddleware;
