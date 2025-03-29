'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {GlobeIcon, TrendingUpIcon, GitForkIcon, SearchIcon, BellIcon, ArrowUpWideNarrow} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Dashboard({data}:{data:any}) {
    const { prApproved, totalContributions, hardIssues, organization } = data;
    const router:AppRouterInstance = useRouter();

    return (
        <div className="w-full">
            {/* Gradient background with mesh effect */}
            <div className="relative w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black opacity-80" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full -ml-20 -mb-20" />

                {/* Header content */}
                <div className="relative px-6 py-8 md:py-8 max-w-6xl mx-auto">
                    <div className="flex flex-col gap-6">
                        {/* Top navigation row */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-zinc-400 font-medium">Dashboard / <span className="text-zinc-200">Contributions</span></h2>

                            <div className="flex items-center gap-3">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" className="relative text-zinc-400 hover:text-zinc-100">
                                                <BellIcon size={18} />
                                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom">
                                            <p>Notifications</p>
                                        </TooltipContent>
                                    </Tooltip>

                                    <div className="h-6 w-px bg-zinc-800" />

                                    <Avatar className="h-8 w-8 border border-zinc-700/50">
                                        <AvatarImage src="/api/placeholder/32/32" alt="User" />
                                        <AvatarFallback className="bg-zinc-800 text-zinc-300">UN</AvatarFallback>
                                    </Avatar>
                                </TooltipProvider>
                            </div>
                        </div>

                        {/* Main header row */}
                        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-12 w-12 rounded-xl bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/30 flex items-center justify-center shadow-lg shadow-zinc-950/20">
                                        <GitForkIcon size={24} className="text-zinc-100" />
                                    </div>
                                    <Badge className="bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 border-zinc-700/50">
                                        <TrendingUpIcon size={14} className="mr-1" />
                                        <span>Active contributor</span>
                                    </Badge>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Your Contributions</h1>
                                <p className="text-zinc-400 max-w-xl">
                                    Track your open source journey across projects and organizations. View your impact and manage your contributions.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-3 md:items-end">
                                  <Button onClick={()=>router.push("/user/contributions")} className="button bg-green-400/80   text-zinc-100">
                                      <ArrowUpWideNarrow size={16} className="mr-2" />
                                        See All
                                    </Button>
                                <Button onClick={()=>router.push("/user/contributions/new")} className="bg-blue-600 hover:bg-blue-700 text-white">
                                    <GlobeIcon size={16} className="mr-2" />
                                    Add New
                                </Button>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {[
                                { label: "Total Contributions", value:  totalContributions },
                                { label: "Hard Issues", value:hardIssues },
                                { label: "Accepted PRs", value: prApproved },
                                { label: "Organizations", value: organization }
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-zinc-800/40 backdrop-blur-sm border border-zinc-700/30 rounded-lg p-4 shadow-lg shadow-zinc-950/10"
                                >
                                    <p className="text-zinc-400 text-sm mb-1">{stat.label}</p>
                                    <div className="flex items-end justify-between">
                                        <span className="text-2xl font-bold text-zinc-100">{stat.value}</span>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}