import { NextResponse } from "next/server";
import userMiddleware from "@/middleware/user.middleware";
import { getUser } from "@/app/actions/user/user.action";

export async function GET(req) {
   userMiddleware(req)
  const response = await getUser(req.userId);
  return NextResponse.json(response);
}
