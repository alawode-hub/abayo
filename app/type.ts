export interface User {
    firstname: string;
    lastname: string;
    middlename?: string;
    gender?: string;
    age: number;
    isOld?: boolean;
}

export interface Client {
    id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
        company: {
            name: string;
            bs: string;
        };
    }


 export interface Post {
         id: number;
         title: string;
         body: string;
    }



    import { Post } from "@/app/type";
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      return posts;
    }
    const page = async ({params}: {params: Promise<{_id: string}>}) => {
        const posts = await getPosts();
       const {_id} = await params;
      return <div>Page {_id}</div>
     
    };
    export default page;
    
    
    
    
    
    
    
    
    //"use client"
    
    //import { useParams } from "next/navigation";
    
    //const page = () => {
    //const {_id} = useParams();
     // return  <div>Page  {_id}</div>
      
    //}
    
    //export default page;

   
