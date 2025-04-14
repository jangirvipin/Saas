"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const REPO_URL = "https://github.com/jangirvipin/Saas";
const API_URL = "https://api.github.com/repos/jangirvipin/Saas";

const GithubIcon: React.FC = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch GitHub stars", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 mt-6 flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-white hover:bg-gray-800 transition"
    >
      <FaGithub className="text-xl" />
      <span className="font-medium">GitHub</span>
      {stars !== null && (
        <span className="ml-2 rounded bg-gray-900 px-2 py-0.5 text-sm text-yellow-400">
          ⭐ {stars}
        </span>
      )}
    </a>
  );
};

export default GithubIcon;
