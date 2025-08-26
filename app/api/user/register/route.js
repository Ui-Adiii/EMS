import { NextResponse } from "next/server";
import { registerUser } from "@/app/actions/user/user.action";
import adminMiddleware from "@/middleware/admin.middleware";

export async function POST(req) {
  const auth =await adminMiddleware(req);
  if(!auth.success){
    return NextResponse.json({message:"you are not admin",success:false});
  }
  const body = await req.json();
  const response = await registerUser(body);
  return NextResponse.json(response);
}
