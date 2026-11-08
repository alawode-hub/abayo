"use server";

import { Client } from "@/app/type";
import dbConnect from "@/lib/db";
import { decrypt, encrypt } from "@/lib/session";
import UserModel from "@/models/userModel";
import  { compare, genSalt, hash } from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import PostModel from "@/models/postModel";

     
  //  const data = await fetch("https://jsonplaceholder.typicode.com/users");
   // const users: Client[] = await data.json();
 //  return users;
//};

export const registerUser = async (user: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}) => {
    await dbConnect();

    
    const salt = await genSalt(10);
    
   
    const hashedPassword = await hash(user.password, salt);

    
    await UserModel.create({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: hashedPassword, 
    });

    return {
        success: true,
    };
};

export const getUsers = async () => {
    await dbConnect(); 
    const users = await UserModel.find({}); 
    return JSON.parse(JSON.stringify(users)); 
};


// login side
export const login = async (data: {email: string; password: string}) => {
    await dbConnect();
    const user = await UserModel.findOne({ email: data.email});
    if (!user) {
        return {
            success: false,
            message: "Invalid Credentials",
        };
    }

// to check valid password
    const validPassword = await compare(data.password, user.password);
    if (!validPassword) {
         return {
            success: false,
            message: "Invalid Credentials",
         };
    }


// to create token
    const token = await encrypt({_id: user._id.toString()});
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: true,
        httpOnly: true,
    });

    return {
        success: true
  };
};

  export const authGuard = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const auth = await decrypt(token);
    if (!auth.success) {
        redirect("/users/login");
    }
  
return auth;
};



//logout funct
export const logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    redirect("/users/login");
};




//postss
export const createPost = async (formData: FormData) => {
    await dbConnect();
    const auth = await authGuard() as any;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    if (!title || !content) return;
    await PostModel.create({ title, content, userId: auth._id });
    revalidatePath("/dashboard");
};

export const getMyPosts = async () => {
    await dbConnect();
    const auth = await authGuard() as any;
    const posts = await PostModel.find({ userId: auth._id }).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(posts));
};



export const getPostById = async (_id: string) => {
  await dbConnect();
  const auth = await authGuard() as any;
  const post = await PostModel.findOne({ _id, userId: auth._id });
  return JSON.parse(JSON.stringify(post));
};



export const deletePost = async (formData: FormData) => {
    await dbConnect();
    const auth = await authGuard() as any;
    const id = formData.get("id") as string;
    await PostModel.findOneAndDelete({ _id: id, userId: auth._id });
    revalidatePath("/dashboard");
};

export const updatePost = async (formData: FormData) => {
    await dbConnect();
    const auth = await authGuard() as any;
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    if (!title || !content) return;
    await PostModel.findOneAndUpdate({ _id: id, userId: auth._id }, { title, content });
    revalidatePath("/dashboard");
};