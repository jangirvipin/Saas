"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Contributions_card from "@/components/App/Contributions/Contributions_card";


export default function ContributionsPage({data}:{data:any}) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get initial values from query params
    const [status, setStatus] = useState(searchParams.get("status") || "");
    const [difficulty, setDifficulty] = useState(searchParams.get("difficulty") || "");

    // Function to update query params
    const updateQueryParams = (key: string, value: string) => {
        const params = new URLSearchParams(window.location.search);
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    // Update query params when filters change
    useEffect(() => {
        updateQueryParams("status", status);
        updateQueryParams("difficulty", difficulty);
    }, [ status, difficulty]);

    // Filtering logic
    const filteredContributions = data.filter((contribution:any) => {
        return (
            (!status || contribution.status.toLowerCase() === status.toLowerCase()) &&
            (!difficulty || contribution.difficulty.toLowerCase() === difficulty.toLowerCase())
        );
    });

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Search & Filter Inputs */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center">

                <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-full text-white md:w-1/4">
                        <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="MERGED">Merged</SelectItem>
                        <SelectItem value="CLOSED">Closed</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger className="w-full text-white md:w-1/4">
                        <SelectValue placeholder="Filter by Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="EASY">Easy</SelectItem>
                        <SelectItem value="MEDIUM">Medium</SelectItem>
                        <SelectItem value="HARD">Hard</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-8 ">
            {filteredContributions.map((contribution:any) => (
                <div>
                    <Contributions_card contribution={contribution} />
                </div>
            ))}
            </div>

        </div>
    );
}
