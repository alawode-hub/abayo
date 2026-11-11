"use client";

import { getUsers } from "@/actions/user";
import { useEffect, useState, useTransition } from "react";
import { Client } from "@/app/type";

const Page = () => {
    const [isPending, startTransition] = useTransition();
    const [users, setUsers] = useState<Client[]>([]);

    useEffect(() => {
        startTransition(async () => {
            const _users = await getUsers();
            setUsers(_users);
        });

        
    }, []);

    return (
        <div className="flex flex-col items-center gap-4">
            {isPending
            ? "Loading"
            : users.map((user) => (
                <div className="flex bg-slate-900 w-full max-w-120 rounded-lg p-5" key={user.id}>
                    <h3 className="capitalie font-medium">{user.name}</h3>
                </div>

            ))}  
        </div>
    );
    };

    export default Page;