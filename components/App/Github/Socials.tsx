'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SocialLinks = () => {
    // State to store links
    const [links, setLinks] = useState<{ name: string; url: string }[]>([]);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    // Function to add a new link
    const handleAddLink = () => {
        if (name && url) {
            setLinks([...links, { name, url }]);
            setName("");
            setUrl("");
        }
    };

    return (
        <div className="text-center">
            {/* Show existing social links */}
            {links.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:underline bg-zinc-800 px-3 py-1 rounded-md border border-zinc-700"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            {/* Add Social Links Dialog */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="mt-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-600 shadow-md">
                        + Add Social Links
                    </Button>

                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border border-zinc-700">
                    <DialogHeader>
                        <DialogTitle  className="text-white">Add Social Link</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-3">
                        <Input
                            type="text"
                            placeholder="Platform (e.g., Twitter, LinkedIn)"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-zinc-800 text-white border border-zinc-600"
                        />
                        <Input
                            type="url"
                            placeholder="Profile URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="bg-zinc-800 text-white border border-zinc-600"
                        />
                        <Button onClick={handleAddLink} className="bg-white text-black hover:bg-white">
                            Save Link
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default SocialLinks;
