import { getPostById } from "@/actions/user";

const page = async ({params}: {params: Promise<{_id: string}>}) => {
    
  const {_id} = await params;
  const post = await getPostById(_id);

  return <div>
    <p>Post ID: {_id}</p>
    <h1>{post.title}</h1>
    <h1>{post.content}</h1>
    </div>
 
};
export default page;








//"use client"

//import { useParams } from "next/navigation";

//const page = () => {
//const {_id} = useParams();
//  return  <div>Page  {_id}</div>
  
//}

//export default page;


//graph sql