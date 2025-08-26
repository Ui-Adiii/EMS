import { getUserById } from "@/app/actions/user/user.action";
import { NextResponse } from "next/server";

export async function GET(req,  { params }) {
   const { id } =await params;
   const user = await getUserById(id);
   return NextResponse.json(user);
}