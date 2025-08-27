import {  updatingStatus } from "@/app/actions/task/task.acction";
import userMiddleware from "@/middleware/user.middleware";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    const auth =await userMiddleware(req);
    if(!auth.success){
        return NextResponse.json({message:"unauthorized user",success:false});
    }

    const body = await req.json();
    const response = await updatingStatus(body.id, body.status);
    return NextResponse.json(response);
}
