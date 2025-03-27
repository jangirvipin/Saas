'use client'
import {useRouter} from "next/navigation";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const EditContributionButton = ({id}:{id:string}) => {
    const router = useRouter();

    return (
        <Button
            onClick={()=>{router.push(`${id}/edit`)}}
            className={`
        group relative 
        inline-flex items-center 
        px-8 py-6 
        text-xl
        overflow-hidden 
        font-medium 
        bg-zinc-800 
        text-zinc-100 
        border border-zinc-700 
        rounded-lg 
        hover:bg-zinc-700 
        focus:outline-none 
        focus:ring-2 
        focus:ring-zinc-500 
        focus:ring-offset-2 
        focus:ring-offset-zinc-900
        transition-all 
        duration-300 
        ease-in-out
        
      `}
        >
            {/* Gradient Background */}
            <span
                className="
          absolute
          left-0
          w-48
          h-48
          transition-all
          duration-300
          origin-top-left
          -translate-x-full
          bg-gradient-to-r
          from-zinc-600
          to-zinc-500
          group-hover:-translate-x-0
          group-hover:rotate-6
          opacity-50
          group-hover:opacity-100
        "
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center space-x-2">
        <Pencil className="w-4 h-4 transition-transform group-hover:rotate-6" />
        <span className="transition-transform group-hover:translate-x-1">
          Edit Contribution
        </span>
      </span>
        </Button>
    );
};

export default EditContributionButton;