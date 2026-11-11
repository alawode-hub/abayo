import dbConnect from "@/lib/db";
import PostModel from "@/models/postModel";
import UserModel from "@/models/userModel";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import gql from "graphql-tag";
import { NextRequest } from "next/server";

//argument and variables

const server = new ApolloServer({
    resolvers: {
        Query: {
            name: () => {
                return "Alawode Abdulmalik"
            },
            users: async () => {
                await dbConnect();
                const users = await UserModel.find();
                return users;
            },
            user: async (parent, args) => {
                await dbConnect();
                const user = await UserModel.findById(args._id);
                return user;
            },
            posts: async () => {
                await dbConnect();
                const posts = await PostModel.find();
                return posts;
            },
            post: async (parent, args) => {
                await dbConnect();
                const post = await PostModel.findById(args._id);
                return post;
            },
        },

        Mutation: {
            register: async (parent, args) => {
                await dbConnect();
                const user = await UserModel.create({
                    firstname: args.firstname,
                    lastname: args.lastname,
                    email: args.email,
                    password: args.password,
                });
                return user;
            },
            createPost: async (parent, args) => {
                await dbConnect();
                const post = await PostModel.create({
                    title: args.title,
                    content: args.content,
                    userId: args.userId,
                });
                return post;
            },
        },
    },

    typeDefs: gql`
    type Query {
     name: String
     users: [User]
     user(_id: String!): User
     posts: [Post]
     post(_id: String!): Post
    }

    type Mutation {
     register(
     firstname: String!
     lastname: String!
     email: String!
     password: String!
    ): User
     createPost(
     title: String!
     content: String!
     userId: String!
    ): Post
    }

    type Post {
    _id: String!
    title: String!
    content: String!
    userId: String!
    }

    type User {
    firstname: String!
    lastname: String!
    email: String!
    _id: String!
    }
 `
});
const handler = startServerAndCreateNextHandler(server);

export const GET = async (req: NextRequest) => {
    return handler(req);
};

export const POST = async (req: NextRequest) => {
    return handler(req);
};