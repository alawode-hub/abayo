export const dynamic = 'force-dynamic';
import dbConnect from "@/lib/db"
import PostModel from "@/models/postModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async () => {
    await dbConnect();
    const posts = await PostModel.find();
    return NextResponse.json({
        data: posts,
        success: true,
    });
};

export const POST = async (req: NextRequest) => {
    await dbConnect();
    const body = await req.json();
    const post = await PostModel.create(body);
    return NextResponse.json({
        data: post,
        success: true,
    });
};