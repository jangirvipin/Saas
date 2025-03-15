import React from 'react';
import { Clock, ExternalLink, GitPullRequest, Github, Check, AlertCircle, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ContributionsHeader from "@/components/App/Contributions/Header";

// Types based on your data
type ContributionStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
type ContributionType = 'ISSUE' | 'PULL_REQUEST' | 'CODE_REVIEW';
type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';
type SkillType = 'RUST' | 'JAVASCRIPT' | 'PYTHON' | 'JAVA' | 'GO' | 'TYPESCRIPT' | 'SQL' | string;

interface Contribution {
    id: string;
    title: string;
    about: string;
    company: string;
    contributionType: ContributionType;
    createdAt: string;
    difficulty: DifficultyLevel;
    prUrl?: string;
    repoUrl: string;
    skill: SkillType;
    status: ContributionStatus;
    userId: string;
}

const Contributions: Contribution=
    {
        id: "cm8abwugw0001v5iomv8jpe9t",
        title: "Fix memory leak in Rust project",
        about: "A critical fix for a known issue in Rust's memory handling",
        company: "Mozilla",
        contributionType: "ISSUE",
        createdAt: "2025-03-15T14:55:38.000Z",
        difficulty: "EASY",
        prUrl: "https://github.com/example/repo/pull/1",
        repoUrl: "https://github.com/example/repo",
        skill: "RUST",
        status: "PENDING",
        userId: "cm8a6niow000av5lojfifb3xz"
    }

const sampleContributions:Contribution[]=[];
for (let i = 0; i < 5; i++) {
    sampleContributions.push(Contributions);
}



// Enhanced skill icon selection
const getSkillIcon = (skill: SkillType) => {
    // This is a simplified version - you may want to import actual tech logos
    const firstLetter = skill.charAt(0).toUpperCase();
    return firstLetter;
};

// Get company avatar fallback
const getCompanyAvatarFallback = (company: string) => {
    return company.substring(0, 2).toUpperCase();
};

// Get difficulty data
const getDifficultyData = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
        case "EASY":
            return {
                variant: "outline" as const,
                className: "border-green-500/20 text-green-500 bg-green-500/10",
                label: "Easy"
            };
        case "MEDIUM":
            return {
                variant: "outline" as const,
                className: "border-blue-500/20 text-blue-500 bg-blue-500/10",
                label: "Medium"
            };
        case "HARD":
            return {
                variant: "outline" as const,
                className: "border-purple-500/20 text-purple-500 bg-purple-500/10",
                label: "Hard"
            };
        default:
            return {
                variant: "outline" as const,
                className: "",
                label: difficulty
            };
    }
};

// Get status data
const getStatusData = (status: ContributionStatus) => {
    switch (status) {
        case "APPROVED":
            return {
                icon: <Check size={14} />,
                variant: "outline" as const,
                className: "border-green-500/20 text-green-500 bg-green-500/10",
                label: "Approved"
            };
        case "REJECTED":
            return {
                icon: <AlertCircle size={14} />,
                variant: "outline" as const,
                className: "border-red-500/20 text-red-500 bg-red-500/10",
                label: "Rejected"
            };
        case "PENDING":
            return {
                icon: <Clock size={14} />,
                variant: "outline" as const,
                className: "border-amber-500/20 text-amber-500 bg-amber-500/10",
                label: "Pending"
            };
        default:
            return {
                icon: <HelpCircle size={14} />,
                variant: "outline" as const,
                className: "",
                label: status
            };
    }
};

export default function ContributionCards() {
    return (
        <div className="min-h-screen relative bg-zinc-900 py-16">
        <div className="w-full max-w-6xl mx-auto px-4">

            <div className="my-10">
                <ContributionsHeader />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleContributions.map((contribution) => {
                    const difficultyData = getDifficultyData(contribution.difficulty);
                    const statusData = getStatusData(contribution.status);

                    return (
                        <Card
                            key={contribution.id}
                            className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700/30 text-zinc-100 relative overflow-hidden group hover:border-zinc-600/50 transition-all duration-300 shadow-lg shadow-zinc-950/20"
                        >
                            {/* Gradient accent in corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-zinc-700/20 rounded-bl-full" />

                            <CardHeader className="pb-2 relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar className="h-8 w-8 bg-zinc-700 border border-zinc-600/50">
                                            <AvatarFallback className="text-xs">
                                                {getCompanyAvatarFallback(contribution.company)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium text-zinc-300">{contribution.company}</span>
                                    </div>

                                    <Badge
                                        variant={statusData.variant}
                                        className={`flex items-center gap-1 ${statusData.className}`}
                                    >
                                        {statusData.icon}
                                        <span>{statusData.label}</span>
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="pb-2">
                                <h3 className="font-bold text-lg mb-2 text-zinc-100 group-hover:text-white transition-colors duration-200">
                                    {contribution.title}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-200">
                                    {contribution.about}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant={difficultyData.variant}
                                        className={difficultyData.className}
                                    >
                                        {difficultyData.label}
                                    </Badge>

                                    <Badge
                                        variant="outline"
                                        className="border-zinc-700/50 text-zinc-300 bg-zinc-800/80 flex items-center gap-1"
                                    >
                    <span className="w-3 h-3 rounded-full bg-zinc-600 flex items-center justify-center text-[8px] font-bold">
                      {getSkillIcon(contribution.skill)}
                    </span>
                                        {contribution.skill}
                                    </Badge>
                                </div>
                            </CardContent>

                            <CardFooter className="border-t border-zinc-800/50 pt-4 flex justify-between items-center mt-2">
                                <TooltipProvider>
                                    <div className="flex items-center text-zinc-500">
                                        <Clock size={14} className="mr-1" />
                                        {new Date(contribution.createdAt).toLocaleDateString()}
                                    </div>

                                    <div className="flex space-x-1">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-zinc-200"
                                                >
                                                    <a
                                                        href={contribution.repoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center"
                                                    >
                                                        <Github size={14} />
                                                    </a>
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom">
                                                <p>View Repository</p>
                                            </TooltipContent>
                                        </Tooltip>

                                        {contribution.prUrl && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-zinc-200"
                                                    >
                                                        <a
                                                            href={contribution.prUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center"
                                                        >
                                                            <GitPullRequest size={14} />
                                                        </a>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="bottom">
                                                    <p>View Pull Request</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        )}

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="secondary"
                                                    size="icon"
                                                    className="h-8 w-8 rounded-full bg-zinc-700 hover:bg-zinc-600 text-zinc-200"
                                                >
                                                    <ArrowUpRight size={14} />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom">
                                                <p>View Details</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </TooltipProvider>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
        </div>
    );
}