'use client'
import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    GitBranch,
    Code,
    Clock,
    Target,
    ExternalLink,
    Quote,
    Pencil
} from "lucide-react";
import getStatusData from "@/utils/Status";
import EditContributionButton from "@/components/App/ui/Edit";

const ContributionDetails = ({ contribution }:any) => {


    const statusData = getStatusData(contribution.status);

    return (
        <div className="w-full max-w-6xl mx-auto bg-zinc-900 text-zinc-100 p-8">
            <div className="flex space-x-6">
                {/* Main Content */}
                <div className="w-2/3 space-y-6">
                    {/* Title and Status Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-2xl font-bold text-zinc-100">
                                {contribution.title}
                            </CardTitle>
                            <Badge
                                variant={statusData.variant}
                                className={`flex items-center gap-1 ${statusData.className}`}
                            >
                                {statusData.icon}
                                <span>{statusData.label}</span>
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-zinc-400">{contribution.about}</p>
                        </CardContent>
                    </Card>

                    {/* Description Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader className="flex items-center space-x-3">
                            <Quote className="w-6 h-6 text-zinc-500" />
                            <CardTitle className="text-xl text-zinc-100">Contribution Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 min-h-[360px]">
                                <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                                    {contribution.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="w-1/3 space-y-6">
                    {/* Company and Type Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-zinc-100">Contribution Context</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <GitBranch className="w-5 h-5 text-zinc-500" />
                                <span className="text-zinc-300">
                  <span className="font-semibold">Company:</span> {contribution.company}
                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <GitBranch className="w-5 h-5 text-zinc-500" />
                                <span className="text-zinc-300">
                  <span className="font-semibold">Type:</span> {contribution.contributionType}
                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* External Links Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-zinc-100">External Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button
                                variant="outline"
                                className="w-full bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                                onClick={() => window.open(contribution.prUrl, '_blank')}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" /> View Pull Request
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                                onClick={() => window.open(contribution.repoUrl, '_blank')}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" /> View Repository
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Contribution Details Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-zinc-100">Contribution Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Code className="w-5 h-5 text-zinc-500" />
                                <span className="text-zinc-300">
                  <span className="font-semibold">Skill:</span> {contribution.skill}
                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Target className="w-5 h-5 text-zinc-500" />
                                <span className="text-zinc-300">
                  <span className="font-semibold">Difficulty:</span> {contribution.difficulty}
                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-zinc-500" />
                                <span className="text-zinc-300">
                  <span className="font-semibold">Created:</span> {new Date(contribution.createdAt).toLocaleDateString()}
                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <EditContributionButton id={contribution.id} />
            </div>

        </div>
    );
};

export default ContributionDetails;