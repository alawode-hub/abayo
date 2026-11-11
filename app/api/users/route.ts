import dbConnect from "@/lib/db";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    await dbConnect();
    const users = await UserModel.find();
    return NextResponse.json({
        data: users,
        success: true,
    });
};