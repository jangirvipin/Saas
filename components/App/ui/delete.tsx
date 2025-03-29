'use client'
import React, { useState } from 'react';
import {useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import axios from "axios";

const DeleteContributionButton = ({id}:{id:string}) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/contribution/${id}`);
            if(response.status===200){
                toast.info("Contribution successfully deleted");
                setTimeout(()=>{
                    router.push("/user/contributions");
                })
            }
            else{
                toast.error("Failed to delete contribution");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while deleting");
        }finally {
            setOpen(false);
        }
    };

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
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
                        from-red-600
                        to-red-500
                        group-hover:-translate-x-0
                        group-hover:rotate-6
                        opacity-50
                        group-hover:opacity-100
                    "
                />

                {/* Button Content */}
                <span className="relative z-10 flex items-center space-x-2">
                    <Trash2 className="w-4 h-4 transition-transform group-hover:rotate-6" />
                    <span className="transition-transform group-hover:translate-x-1">
                        Delete Contribution
                    </span>
                </span>
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-zinc-900 text-zinc-300 border-zinc-700">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Confirm Deletion</DialogTitle>
                        <DialogDescription className="text-zinc-400">
                            Are you sure you want to delete this contribution? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex space-x-2 pt-4">
                        <Button
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-200"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDelete}
                            className="bg-red-600 text-white hover:bg-red-700"
                        >
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DeleteContributionButton;