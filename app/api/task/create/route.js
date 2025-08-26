import { createTask } from "@/app/actions/task/task.acction";
import adminMiddleware from "@/middleware/admin.middleware";
import { NextResponse } from "next/server";

export async function POST(req) {
    const auth =await adminMiddleware(req);
    if(!auth.success){
        return NextResponse.json({message:"you are not admin",success:false});
    }
    const body = await req.json();
    const response = await createTask(body);
    return NextResponse.json(response);
}
