
import { authGuard, logout, createPost, getMyPosts, deletePost, updatePost } from "@/actions/user";
import UserModel from "@/models/userModel";
import dbConnect from "@/lib/db";
import Link from "next/link";

const CreatePostForm = () => {
  return (
    <form action={createPost} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4">
      <div>
        <h2 className="text-white font-bold text-lg">Create New Post</h2>
        <p className="text-slate-400 text-xs mt-1">Share your thoughts...</p>
      </div>
      <input 
        name="title" 
        placeholder="Post title..." 
        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:border-slate-600 focus:ring-2 focus:ring-slate-600 outline-none text-sm"
        required
      />
      <textarea 
        name="content" 
        placeholder="Write your content here..." 
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:border-slate-600 focus:ring-2 focus:ring-slate-600 outline-none text-sm resize-none"
        required
      />
      <button type="submit" className="w-full bg-white text-black py-3 rounded-xl text-sm font-bold hover:bg-slate-200 transition">
        Publish Post +
      </button>
    </form>
  );
};

const MyPosts = async () => {
  const posts = await getMyPosts();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-white font-bold text-lg">My Blog Posts</h2>
        <span className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-full">{posts.length} POSTS</span>
      </div>
      
      {posts.length === 0 && (
        <div className="bg-slate-800 border border-dashed border-slate-700 rounded-2xl p-10 text-center">
          <p className="text-sm text-slate-500">No posts yet.</p>
        </div>
      )}

      <div className="grid gap-4">
        {posts.map((post: any) => (
          <div key={post._id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition group">
            <h3 className="font-bold text-white text-base">{post.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">{post.content}</p>
            
            <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
              <span className="text-xs text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</span>
              <div className="flex items-center gap-2">

                <Link href={`/posts/${post._id.toString()}`} className="text-xs bg-white text-black px-3 py-1 rounded-full">
                          VIEW
                     </Link>
                <label htmlFor={`edit-${post._id}`} className="text-xs bg-slate-700 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-slate-600 transition">EDIT</label>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={post._id.toString()} />
                  <button className="text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition">DELETE</button>
                </form>
              </div>
            </div>

            <input type="checkbox" id={`edit-${post._id}`} className="peer hidden" />
            <form action={updatePost} className="hidden peer-checked:flex flex-col gap-3 mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
              <input type="hidden" name="id" value={post._id.toString()} />
              <input 
                name="title" 
                defaultValue={post.title}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm outline-none focus:border-slate-600"
                required
              />
              <textarea 
                name="content" 
                defaultValue={post.content}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm outline-none focus:border-slate-600 resize-none"
                required
              />
              <div className="flex gap-2">
                <button type="submit" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 transition">Save</button>
                <label htmlFor={`edit-${post._id}`} className="bg-slate-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-slate-600 transition">Cancel</label>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = async () => {
    await dbConnect();
    const auth = await authGuard() as any;
    const user = await UserModel.findById(auth._id);

    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <nav className="sticky top-0 bg-slate-900 border-b border-slate-800 z-10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1 className="font-bold tracking-tight">BLOG.</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-300 hidden sm:block">{user?.firstname} {user?.lastname}</span>
              <form action={logout}>
                <button className="bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition">Logout</button>
              </form>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome bacc, <span className="text-slate-400">{user?.lastname}</span> 👋</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6 items-start">
            <div className="lg:sticky lg:top-24 flex flex-col gap-4">
              <CreatePostForm />
            </div>
            <MyPosts />
          </div>
        </main>
      </div>
    );
};

export default Dashboard;