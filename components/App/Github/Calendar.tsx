import { fetchGitHubContributions } from "@/lib/github";

export default async function GitHubCalendar({ username }: { username: string }) {
    const contributions = await fetchGitHubContributions(username);

    // Function to determine color based on contribution count
    const getColorClass = (count: number) => {
        if (count === 0) return "bg-zinc-800 border border-zinc-700";
        if (count <= 3) return "bg-white/60";
        if (count <= 6) return "bg-white/70";
        if (count <= 9) return "bg-white/80";
        return "bg-white";
    };

    // Organize days into weeks (7 rows)
    const weeks = [];
    let dayIndex = 0;

    // GitHub starts weeks on Sunday (0) and ends on Saturday (6)
    while (dayIndex < contributions.length) {
        const week = [];
        for (let i = 0; i < 7 && dayIndex < contributions.length; i++) {
            week.push(contributions[dayIndex]);
            dayIndex++;
        }
        weeks.push(week);
    }

    return (
        <div className="bg-zinc-900 p-4 border border-zinc-700 rounded-md ">
            <h2 className="text-white text-center mb-4">GitHub Contributions for {username}</h2>

            {/* Month labels */}
            <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-1 text-xs text-zinc-400 mb-1  ">
                {/* You'll need to calculate which columns to show month labels */}
                <div className="col-span-4">Jan</div>
                <div className="col-span-4">Feb</div>
                <div className="col-span-5">Mar</div>
                <div className="col-span-4">Apr</div>
                <div className="col-span-4">May</div>
                <div className="col-span-5">Jun</div>
                <div className="col-span-4">Jul</div>
                <div className="col-span-4">Aug</div>
                <div className="col-span-5">Sep</div>
                <div className="col-span-4">Oct</div>
                <div className="col-span-4">Nov</div>
                <div className="col-span-5">Dec</div>
            </div>

            {/* Day labels */}


            {/* Calendar grid */}
            <div className="flex ">
                {/* Day labels column */}
                <div className="w-8 mt-3">
                    <div className="flex mb-4">
                        <div className="w-8 text-xs text-zinc-400 text-right pr-2">Mon</div>
                        <div className="flex-1"></div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-8 text-xs text-zinc-400 text-right pr-2">Wed</div>
                        <div className="flex-1"></div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-8 text-xs text-zinc-400 text-right pr-2">Fri</div>
                        <div className="flex-1"></div>
                    </div>
                </div>

                {/* Weeks */}
                <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1  ">
                    {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="grid grid-rows-7 gap-1 ">
                            {week.map((day, dayIndex) => (
                                <div
                                    key={`${weekIndex}-${dayIndex}`}
                                    className={`w-3 h-3  ${getColorClass(day.contributionCount)}`}
                                    title={`${day.date}: ${day.contributionCount} contributions`}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end mt-10  text-xs text-zinc-400">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-zinc-800 border border-zinc-700 mx-1"></div>
                <div className="w-3 h-3 rounded-sm bg-white/60 mx-1"></div>
                <div className="w-3 h-3 rounded-sm bg-white/70 mx-1"></div>
                <div className="w-3 h-3 rounded-sm bg-white/80 mx-1"></div>
                <div className="w-3 h-3 rounded-sm bg-white mx-1"></div>
                <span>More</span>
            </div>
        </div>
    );
}