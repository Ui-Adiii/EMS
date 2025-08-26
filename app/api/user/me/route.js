import { NextResponse } from "next/server";
import userMiddleware from "@/middleware/user.middleware";
import { getUserById } from "@/app/actions/user/user.action";

export async function GET(req) {
  const auth = await userMiddleware(req);
  if (!auth.success) {
    return NextResponse.json({ message: "Unauthorized", success: false });
  }
  const response = await getUserById(req.userId);
  return NextResponse.json(response);
}
