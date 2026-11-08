import dbConnect from "@/lib/db";

export async function GET() {
  try {
    await dbConnect();
    return Response.json({ message: "MongoDB Connected Successfully! 🎉" });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}