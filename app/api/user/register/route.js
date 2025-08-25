import { NextResponse } from "next/server";
import { registerUser } from "@/app/actions/user/user.action";
import adminMiddleware from "@/middleware/admin.middleware";

export async function POST(req) {
  adminMiddleware(req);
  const body = await req.json();
  const response = await registerUser(body);
  return NextResponse.json(response);
}
