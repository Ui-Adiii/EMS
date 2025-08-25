import { NextResponse } from "next/server";
import { registerUser } from "@/app/actions/user/user.action";

export async function POST(req) {
  const body = await req.json();
  const response = await registerUser(body);
  return NextResponse.json(response);
}
