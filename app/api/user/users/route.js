import { getUsersByRole } from "@/app/actions/user/user.action";
import adminMiddleware from "@/middleware/admin.middleware";
import { NextResponse } from "next/server";

export async function GET(req){
    const auth =await adminMiddleware(req);
    if(!auth.success){
      return NextResponse.json({message:"you are not admin",success:false});
    }
    const response = await getUsersByRole("user");
    return NextResponse.json(response);
}