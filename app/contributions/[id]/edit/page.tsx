'use client'
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Save,
    X
} from "lucide-react";

const EditContributionPage = ({ contribution}:{contribution:any}) => {
    // Initialize state with existing contribution data
    const [formData, setFormData] = useState({
        title: "",
        about: "",
        skill: "",
        difficulty: "",
        status: "",
        company: "",
        contributionType: "",
        prUrl: "",
        repoUrl: "",
        description:""
    });

    // Handle input changes
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle select changes
    const handleSelectChange = (field:any, value:any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Form submission handler
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // TODO: Implement actual submission logic
        console.log('Updated Contribution Data:', formData);
    };

    return (
        <div className="w-full max-w-6xl mx-auto bg-zinc-900 text-zinc-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Main Information Card */}
                <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-zinc-100">
                            Edit Contribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Title */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Title</Label>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                                    placeholder="Contribution Title"
                                />
                            </div>

                            {/* About */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">About</Label>
                                <Input
                                    name="about"
                                    value={formData.about}
                                    onChange={handleInputChange}
                                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                                    placeholder="Short description"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Detailed Information Card */}
                <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader>
                        <CardTitle className="text-xl text-zinc-100">
                            Contribution Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            {/* Skill */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Skill</Label>
                                <Input
                                    name="skill"
                                    value={formData.skill}
                                    onChange={handleInputChange}
                                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                                    placeholder="Skill"
                                />
                            </div>

                            {/* Difficulty */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Difficulty</Label>
                                <Select
                                    value={formData.difficulty}
                                    onValueChange={(value) => handleSelectChange('difficulty', value)}
                                >
                                    <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-100">
                                        <SelectValue placeholder="Select Difficulty" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-800 border-zinc-700">
                                        <SelectItem value="EASY" className="text-zinc-300 hover:bg-zinc-700">Easy</SelectItem>
                                        <SelectItem value="MEDIUM" className="text-zinc-300 hover:bg-zinc-700">Medium</SelectItem>
                                        <SelectItem value="HARD" className="text-zinc-300 hover:bg-zinc-700">Hard</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Status */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Status</Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(value) => handleSelectChange('status', value)}
                                >
                                    <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-100">
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-800 border-zinc-700">
                                        <SelectItem value="PENDING" className="text-zinc-300 hover:bg-zinc-700">Pending</SelectItem>
                                        <SelectItem value="COMPLETED" className="text-zinc-300 hover:bg-zinc-700">Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Context and Links Card */}
                <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader>
                        <CardTitle className="text-xl text-zinc-100">
                            Contribution Context
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Company */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Company</Label>
                                <Input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                                    placeholder="Company Name"
                                />
                            </div>

                            {/* Contribution Type */}
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Contribution Type</Label>
                                <Select
                                    value={formData.contributionType}
                                    onValueChange={(value) => handleSelectChange('contributionType', value)}
                                >
                                    <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-100">
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-800 border-zinc-700">
                                        <SelectItem value="ISSUE" className="text-zinc-300 hover:bg-zinc-700">Issue</SelectItem>
                                        <SelectItem value="FEATURE" className="text-zinc-300 hover:bg-zinc-700">Feature</SelectItem>
                                        <SelectItem value="BUGFIX" className="text-zinc-300 hover:bg-zinc-700">Bug Fix</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* External Links */}
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Pull Request URL</Label>
                                <Input
                                    name="prUrl"
                                    value={formData.prUrl}
                                    onChange={handleInputChange}
                                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                                    placeholder="Pull Request URL"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-zinc-300">Repository URL</Label>
                                <Input
                                    name="repoUrl"
                                    value={formData.repoUrl}
                                    onChange={handleInputChange}
                                    className="bg-zinc-900 border-zinc-700 text-zinc-100"
                                    placeholder="Repository URL"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Description Card */}
                <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader>
                        <CardTitle className="text-xl text-zinc-100">
                            Contribution Experience
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label className="text-zinc-300">Description</Label>
                            <Textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="bg-zinc-900 border-zinc-700 text-zinc-100 min-h-[200px]"
                                placeholder="Share your contribution experience..."
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <Button
                        type="button"
                        variant="outline"
                        className="
              bg-zinc-900
              text-zinc-100
              border-zinc-700
              hover:bg-zinc-800
            "
                    >
                        <X className="mr-2 h-4 w-4" /> Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="
              bg-zinc-700
              text-zinc-100
              hover:bg-zinc-600
              focus:ring-2
              focus:ring-zinc-500
            "
                    >
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditContributionPage;