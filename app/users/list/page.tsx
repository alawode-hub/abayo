import { getUsers } from "@/actions/user";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className="p-10 w-full mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-6">All Users - {users.length}</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-2">Firstname</th>
             <th className="p-2">lastname</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u._id} className="border-b">
              <td className="p-2">{u.firstname} </td>
                 <td className="p-2">{u.lastname} </td>
              <td className="p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;