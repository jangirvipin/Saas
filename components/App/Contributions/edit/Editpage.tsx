'use client'
import {useRouter} from "next/navigation";
import axios from "axios";
import React, { useState } from 'react';
import { toast } from "sonner";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Contribution from "@/components/App/Contributions/ui/Contribution";

const EditPage = ({ contribution }:{contribution:any}) => {
    const router:AppRouterInstance = useRouter();
    const id = contribution.id;

    const [editedContribution, setEditedContribution] = useState({
        title: contribution.title,
        status:contribution.status,
        about: contribution.about,
        company: contribution.company,
        contributionType: contribution.contributionType,
        skill: contribution.skill,
        difficulty: contribution.difficulty,
        createdAt: contribution.createdAt,
        prUrl: contribution.prUrl,
        repoUrl: contribution.repoUrl
    });

    // Handle input changes
    const handleInputChange = (field:any, value:any) => {
        setEditedContribution(prev => ({
            ...prev,
            [field]: value
        }));
    };


    const handleSubmit =async () => {
        const res =await axios.put(`http://localhost:3000/api/contribution/${id}`, editedContribution);
        if(res.status===200){
            toast.success("Contribution successfully updated");
            setTimeout(() => {
                router.push(`/user/contributions/${id}`);
            },1000)
        }else{
            toast.error("Failed to update contribution");
        }
    };

    return (
     <Contribution
         editedContribution={editedContribution}
         handleSubmit={handleSubmit}
         handleInputChange={handleInputChange}
     />
    );
};

export default EditPage;