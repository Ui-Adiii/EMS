import { NextResponse } from "next/server";
import { loginUser } from "@/app/actions/user/user.action";

export async function POST(req) {
  const body = await req.json();
  const response = await loginUser(body);
  return NextResponse.json(response);
}
