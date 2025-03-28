import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {ArrowLeft, Clock, Code, GitBranch, Quote, Save, Target} from "lucide-react";
import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";

const difficultyOptions = [
    'EASY',
    'MODERATE',
    'HARD'
];

// Status options
const statusOptions = [
    'PENDING',
    'APPROVED',
    'REJECTED',
];


const Contribution=({editedContribution,handleSubmit,handleInputChange}:{editedContribution:any,handleSubmit:any,handleInputChange:any})=>{
    const router =useRouter();

    return (
        <div className="w-full max-w-6xl mx-auto bg-zinc-900 text-zinc-100 p-8">
            <div className="flex gap-x-6 ">
                {/* Main Content */}
                <div className="w-2/3 space-y-6">
                    {/* Title and Status Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <Input
                                value={editedContribution.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                className="text-2xl font-bold text-zinc-100 bg-zinc-700 border-zinc-600"
                                placeholder="Contribution Title"
                            />
                            <Select
                                value={editedContribution.status}
                                onValueChange={(value) => handleInputChange('status', value)}
                            >
                                <SelectTrigger className="w-[180px] bg-zinc-700 border-zinc-600 text-white">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {statusOptions.map(status => (
                                        <SelectItem key={status} value={status}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent>
                            <Textarea
                                value={editedContribution.about}
                                onChange={(e) => handleInputChange('about', e.target.value)}
                                className="text-zinc-400 bg-zinc-700 border-zinc-600 w-full min-h-[80px]"
                                placeholder="Contribution Description"
                            />
                        </CardContent>
                    </Card>

                    {/* Description Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader className="flex items-center space-x-3">
                            <Quote className="w-6 h-6 text-zinc-500" />
                            <CardTitle className="text-xl text-zinc-100">Contribution Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Textarea
                                className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 text-zinc-300 w-full min-h-[365px]"
                                placeholder="Detailed contribution experience"
                            />
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
                                <Input
                                    value={editedContribution.company}
                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                    className="text-zinc-300 bg-zinc-700 border-zinc-600"
                                    placeholder="Company"
                                />
                            </div>
                            <div className="flex items-center space-x-3">
                                <GitBranch className="w-5 h-5 text-zinc-500" />
                                <Input
                                    value={editedContribution.contributionType}
                                    onChange={(e) => handleInputChange('contributionType', e.target.value)}
                                    className="text-zinc-300 bg-zinc-700 border-zinc-600"
                                    placeholder="Contribution Type"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* External Links Card */}
                    <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-zinc-100">External Links</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                value={editedContribution.prUrl}
                                onChange={(e) => handleInputChange('prUrl', e.target.value)}
                                className="w-full bg-zinc-900 text-zinc-100 border-zinc-700"
                                placeholder="Pull Request URL"
                            />
                            <Input
                                value={editedContribution.repoUrl}
                                onChange={(e) => handleInputChange('repoUrl', e.target.value)}
                                className="w-full bg-zinc-900 text-zinc-100 border-zinc-700"
                                placeholder="Repository URL"
                            />
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
                                <Input
                                    value={editedContribution.skill}
                                    onChange={(e) => handleInputChange('skill', e.target.value)}
                                    className="text-zinc-300 bg-zinc-700 border-zinc-600 "
                                    placeholder="Skill"
                                />
                            </div>
                            <div className="flex items-center space-x-3">
                                <Target className="w-5 h-5 text-zinc-500" />
                                <Select
                                    value={editedContribution.difficulty}
                                    onValueChange={(value) => handleInputChange('difficulty', value)}
                                >
                                    <SelectTrigger className="w-full bg-zinc-700 border-zinc-600 text-zinc-300">
                                        <SelectValue placeholder="Difficulty" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {difficultyOptions.map(diff => (
                                            <SelectItem key={diff} value={diff}>
                                                {diff}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-zinc-500" />
                                <Input
                                    type="date"
                                    value={new Date(editedContribution.createdAt).toISOString().split('T')[0]}
                                    onChange={(e) => handleInputChange('createdAt', e.target.value)}
                                    className="text-zinc-300 bg-zinc-700 border-zinc-600 w-full"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
                <Button
                    variant="outline"
                    className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                    onClick={()=>{router.back()}}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Cancel
                </Button>
                <Button
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={handleSubmit}
                >
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>
        </div>
    )
}

export  default Contribution;