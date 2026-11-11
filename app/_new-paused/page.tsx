"use client";

import { registerUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useTransition } from "react";

const page = () => {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
});

const handleInputChange = (
  e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
) => {
  const key = e.target.name;
  const value = e.target.value;

  setUser({
    ...user,
    [key]: value,
  });
};

const submitForm = () => {

  if(!user.firstname || !user.email || !user.password){
  alert("All fields required!");
  return;
}
if(user.password.length < 6){
  alert("Password must be 6 chars");
  return;
}
  startTransition(async () => {
    const response = await registerUser(user);
    if (response.success) {
     router.push("/users/login");
    }
  });

};

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="max-w-xl w-full">
        Register Here
        <div className="flex mt-6 flex-col gap-6">

          <input 
          onChange={handleInputChange}
          name="firstname"
          type="text"
          placeholder="firstname"
          className="text-sm px-4 py-2 rounded-lg bg-transparent border border-slate-600 focus:border-slate-500 transition" />

          <input 
          onChange={handleInputChange}
          name="lastname"
          placeholder="lastname"
          type="text"
          className="text-sm py-2 px-4 bg-transparent border border-slate-600 focus:border-slate-500 transition rounded-lg "  />

           <input 
          onChange={handleInputChange}
          name="email"
          placeholder="Enter Email"
          type="text"
          className="text-sm py-2 px-4 bg-transparent border border-slate-600 focus:border-slate-500 transition rounded-lg "  />


           <input 
          onChange={handleInputChange}
          name="password"
          placeholder="password"
          type="password"
          className="text-sm py-2 px-4 bg-transparent border border-slate-600 focus:border-slate-500 transition rounded-lg "  />


          <button onClick={submitForm}
          className="text-sm px-4 w-full py-2 bg-slate-700 rounded-lg">
            {isLoading ? "Submitting" : "Submit"}
          </button>


        </div>
      </div>
    </div>
  )
}

export default page