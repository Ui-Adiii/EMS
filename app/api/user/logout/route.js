import { NextResponse } from "next/server";
import userMiddleware from "@/middleware/user.middleware";
import { logOut } from "@/app/actions/user/user.action";

export async function GET(req) {
  const response = await logOut(req.userId);
  return NextResponse.json(response);
}
