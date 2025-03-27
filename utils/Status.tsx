import {AlertCircle, Check, Clock, HelpCircle} from "lucide-react";
import React from "react";

type ContributionStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

const getStatusData = (status: ContributionStatus) => {
    switch (status) {
        case "APPROVED":
            return {
                icon: <Check size={14}/>,
                variant: "outline" as const,
                className: "border-green-500/20 text-green-500 bg-green-500/10",
                label: "Approved"
            };
        case "REJECTED":
            return {
                icon: <AlertCircle size={14}/>,
                variant: "outline" as const,
                className: "border-red-500/20 text-red-500 bg-red-500/10",
                label: "Rejected"
            };
        case "PENDING":
            return {
                icon: <Clock size={14}/>,
                variant: "outline" as const,
                className: "border-amber-500/20 text-amber-500 bg-amber-500/10",
                label: "Pending"
            };
        default:
            return {
                icon: <HelpCircle size={14}/>,
                variant: "outline" as const,
                className: "",
                label: status
            };
    }
}

export default getStatusData;