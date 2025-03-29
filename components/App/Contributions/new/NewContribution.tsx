'use client'
import React, {useState} from "react";
import Contribution from "@/components/App/Contributions/ui/Contribution";
import axios from "axios";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

export default function NewContribution(){
    const router = useRouter();

    const [editedContribution, setEditedContribution] = useState({
        title: "",
        status:"",
        about: "",
        company: "",
        contributionType: "",
        skill: "",
        difficulty: "",
        createdAt: new Date().toISOString(),
        prUrl: "",
        repoUrl: ""
    });

    const handleSubmit =async ()=>{
        try {
            const res = await axios.post(`http://localhost:3000/api/contribution/new`, editedContribution);
            console.log(res);
            if (res.status === 200) {
                toast.success("Contribution successfully created");
                setTimeout(() => {
                    router.push(`/user/contributions`);
                })
            } else {
                toast.error("Failed to create contribution");
            }
        }
        catch (e){
            toast.error("Fill all the details");
        }
    }

    const handleInputChange=async (field:any,value:any)=>{
        setEditedContribution(prev => ({
            ...prev,
            [field]: value,
        }));
    }


    return (
            <Contribution
                editedContribution={editedContribution}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
    )
}