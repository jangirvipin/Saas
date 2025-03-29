import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ArrowUpRight, Clock, Github, GitPullRequest} from "lucide-react";
import {Button} from "@/components/ui/button";
import React from "react";
import getDifficultyData from "@/utils/Difficulty";
import getStatusData from "@/utils/Status";

// type ContributionStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
// type ContributionType = 'ISSUE' | 'PULL_REQUEST' | 'CODE_REVIEW';
// type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';
type SkillType = 'RUST' | 'JAVASCRIPT' | 'PYTHON' | 'JAVA' | 'GO' | 'TYPESCRIPT' | 'SQL' | string;

// interface Contribution {
//     id: string;
//     title: string;
//     about: string;
//     company: string;
//     contributionType: ContributionType;
//     createdAt: string;
//     difficulty: DifficultyLevel;
//     prUrl?: string;
//     repoUrl: string;
//     skill: SkillType;
//     status: ContributionStatus;
//     userId: string;
// }

export default function Contributions_card({contribution}:{contribution:any}) {
    const id =contribution.id;



    const getCompanyAvatarFallback = (company: string) => {
        return company.substring(0, 2).toUpperCase();
    };

    const getSkillIcon = (skill: SkillType) => {
        return skill.charAt(0).toUpperCase();
    };


    const difficultyData = getDifficultyData(contribution.difficulty);
    const statusData = getStatusData(contribution.status);

    return (
        <Card
            key={contribution.id}
            className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700/30 text-zinc-100 relative overflow-hidden group hover:border-zinc-600/50 transition-all duration-300 shadow-lg shadow-zinc-950/20 flex flex-col h-[380px]" // Fixed height
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

            <CardContent className="pb-2 flex-grow overflow-hidden flex flex-col">
                <h3 className="font-bold text-lg mb-2 text-zinc-100 group-hover:text-white transition-colors duration-200 line-clamp-2 text-ellipsis">
                    {contribution.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3 overflow-hidden text-ellipsis">
                    {contribution.about}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
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
                                    <a href={`/user/contributions/${id}`}><ArrowUpRight size={14} /></a>
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
    )
}