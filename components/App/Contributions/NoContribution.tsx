import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, FileX } from "lucide-react";
import Link from "next/link";
import Background from "@/components/App/ui/background";

const NoContributionsFound = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-4">
            <Background />
            <Card className="w-full max-w-md  border-2 bg-transparent backdrop-blur-sm">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <FileX size={64} className="text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-zinc-100">No contributions found</CardTitle>
                    <CardDescription>
                        You haven't shared any open source contributions yet.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                    <p>
                        Share your open source contributions with the community.
                        Showcase your work, get feedback, and connect with other developers.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/user/contributions/new">
                        <Button className="gap-2 bg-blue-600 cursor-pointer hover:bg-blue-600 text-white font-semibold">
                            <PlusCircle size={16} />
                            Add Your First Contribution
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NoContributionsFound;