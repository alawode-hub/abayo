import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) console.warn("MONGODB_URI not set - skipping DB connect at build time");

let cached = (global as any).mongoose || { conn: null, promise: null };
(global as any).mongoose = cached;

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {

    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, 
    }).then((m) => m);
  }
  
  try {
    cached.conn = await cached.promise;
    console.log("MongoDB Connected!");
    return cached.conn;
  } catch (error) {
    cached.promise = null; 
    throw error;
  }
}
