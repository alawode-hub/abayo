import { getUsers } from "@/actions/user";

const Page = async () => {
  const users = await getUsers();

  return (
    <div className=" bg-black p-6 w-7xl mx-auto">
             
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user: any) => (
            <div key={user.id} className="bg-black border border-zinc-800 rounded-2xl p-6 " >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold">{user.name.charAt(0)}</div>
                <div>
                  <h2 className="text-white font-mono">{user.name}</h2>
                  <p className="text-white font-mono">{user.username}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-white"> {user.email}</p>
                <p className="text-white"> {user.phone}</p>
                <p className="text-white"> {user.website}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-900">
                <p className="text-white text-xs ">Company</p>
                <p className="text-white text-sm font-sans">{user.company.name}</p>
                <p className="text-white text-xs">{user.company.bs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default Page;