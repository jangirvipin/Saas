
import React from "react";
import Dashboard from "@/components/App/Contributions/Dashboard";

const page =()=>{
    return (
            <div className="min-h-screen relative bg-zinc-900 py-16">
                <div className="w-full max-w-6xl mx-auto px-4">
                <div className="my-10">
                <Dashboard />
            </div>
                </div>
        </div>
    )
}

export default page;