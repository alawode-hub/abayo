import { Post } from "../../type";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;

};

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-white text-xl mb-6 font-bold">Editor's picks</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <div key={post.id} className="border border-neutral-800 p-4 rounded-lg bg-black ">
            <div className="font-bold text-white mb-2">{post.title}</div>
            <div className="text-neutral-400 text-sm">{post.body }</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;