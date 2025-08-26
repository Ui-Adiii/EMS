"use server";
import { NextResponse } from "next/server";
import userMiddleware from "./user.middleware";
const adminMiddleware = async (req) => {
  const auth = await userMiddleware(req);
  if (!auth.success) {
    return NextResponse.json({ message: "Unauthorized", success: false });
  }
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
    return {
      success: true,
      message: "User is admin"
    }
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
};
export default adminMiddleware;
