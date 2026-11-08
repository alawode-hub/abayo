"use client";
import { login } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const handleLogin = async () => {
    
    if (!email || !password) {
      alert("Abeg fill everything!");
      return;
    }

    startTransition(async () => {
      const res = await login({email, password});
       if (res.success) {
        alert("Login successful!");
        router.push("/dashboard");
         } else {
    alert(res.message);
  }
    });
  };

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex flex-col gap-4 w-96">

        <h1>Login</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" />

        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border rounded" />

       <button onClick={handleLogin} className="bg-slate-700 text-white p-2 rounded">
      {isLoading ? "Logging in" : "Login"}
     </button> 

           </div>
    </div>
  )
}
export default LoginPage;