"use client";

import graphqlclient from "@/lib/graphql-client";
import { useQuery } from "@apollo/client/react";
import gql from "graphql-tag";
import { MyUser } from "../type";
import { TypedDocumentNode } from "@apollo/client";




const GET_USERS: TypedDocumentNode<{ users: MyUser[] }> = gql`
query ExampleQuery {
 users {
 email
 firstname
 _id
 }
}
`;
const page = () => {
    const { loading, data } = useQuery(GET_USERS, {
        client: graphqlclient,
    });

     return (
        <div className="flex flex-col items-center gap-4">
            {loading
            ? "Loading"
            : data?.users.map((user) => (
                <div className="flex bg-slate-900 w-full max-w-120 rounded-lg p-5" key={user._id}>
                    <h3 className="capitalie font-medium">{user.firstname}</h3>
                     <h3 className="capitalie font-medium">{user.lastname}</h3>
                </div>

            ))}  
        </div>

     );
   
    
 };

export default page;