import React from 'react';
import {CardContent,CardHeader,CardTitle,Card} from "@/components/ui/card";

interface ContributionDay {
    date: string;
    contributionCount: number;
    dayOfWeek: number;
    isFutureDate: boolean;
}

interface ContributionStatsProps {
    data: ContributionDay[];
    username: string;
}

interface ContributionStats {
    total: number;
    averagePerDay: number;
    averagePerWeek: number;
    longestStreak: number;
    currentStreak: number;
    mostProductiveDay: string;
    mostProductiveMonth: string;
}

export default function ContributionStats({ data, username }: ContributionStatsProps) {
    const stats = calculateStats(data);

    return (
        <Card className="bg-zinc-900 mt-6  border border-zinc-800 rounded-xl shadow-md">
            <CardHeader>
                <CardTitle className="text-white text-xl font-bold tracking-wide">
                    Contribution Statistics for {username}
                </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Contribution Stats */}
                <Card className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold">Contribution Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-300 space-y-2">
                        <p>Total: <span className="font-bold text-white">{stats.total}</span> contributions</p>
                        <p>Daily Average: <span className="font-bold text-white">{stats.averagePerDay}</span></p>
                        <p>Weekly Average: <span className="font-bold text-white">{stats.averagePerWeek}</span></p>
                    </CardContent>
                </Card>

                {/* Streaks */}
                <Card className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold">Streaks</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-300 space-y-2">
                        <p>Current: <span className="font-bold text-white">{stats.currentStreak}</span> days</p>
                        <p>Longest: <span className="font-bold text-white">{stats.longestStreak}</span> days</p>
                    </CardContent>
                </Card>

                {/* Patterns */}
                <Card className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold">Patterns</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-300 space-y-2">
                        <p>Most Active Day: <span className="font-bold text-white">{stats.mostProductiveDay}</span></p>
                        <p>Most Active Month: <span className="font-bold text-white">{stats.mostProductiveMonth}</span></p>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
}

// Calculate statistics from contribution data
function calculateStats(days: ContributionDay[]): ContributionStats {
    const nonFutureDays = days.filter(day => !day.isFutureDate);
    const totalContributions = nonFutureDays.reduce((sum, day) => sum + day.contributionCount, 0);

    // Calculate average per day
    const averagePerDay = totalContributions / nonFutureDays.length;

    // Calculate average per week
    const weekCount = Math.ceil(nonFutureDays.length / 7);
    const averagePerWeek = totalContributions / weekCount;

    // Find longest and current streak
    let longestStreak = 0;
    let currentStreak = 0;
    let tempStreak = 0;

    [...nonFutureDays].reverse().forEach((day, index) => {
        if (day.contributionCount > 0) {
            tempStreak++;

            if (index === 0) {
                currentStreak = tempStreak;
            }
        } else {
            if (tempStreak > longestStreak) {
                longestStreak = tempStreak;
            }
            tempStreak = 0;

            if (currentStreak === 0 && index === 0) {
                currentStreak = 0;
            }
        }
    });

    // Check if the final streak is the longest
    if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
    }

    // Find most productive day of week
    const dayContributions = [0, 0, 0, 0, 0, 0, 0]; // Sun to Sat
    const dayCount = [0, 0, 0, 0, 0, 0, 0];

    nonFutureDays.forEach(day => {
        dayContributions[day.dayOfWeek] += day.contributionCount;
        dayCount[day.dayOfWeek]++;
    });

    const dayAverages = dayContributions.map((total, index) => ({
        day: index,
        average: dayCount[index] > 0 ? total / dayCount[index] : 0
    }));

    const mostProductiveDayIndex = dayAverages.reduce(
        (maxIndex, current, index) => current.average > dayAverages[maxIndex].average ? index : maxIndex,
        0
    );

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const mostProductiveDay = daysOfWeek[mostProductiveDayIndex];

    // Find most productive month
    const monthContributions = Array(12).fill(0);
    const monthCount = Array(12).fill(0);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    nonFutureDays.forEach(day => {
        const month = new Date(day.date).getMonth();
        monthContributions[month] += day.contributionCount;
        monthCount[month]++;
    });

    const monthAverages = monthContributions.map((total, index) => ({
        month: index,
        average: monthCount[index] > 0 ? total / monthCount[index] : 0
    }));

    const mostProductiveMonthIndex = monthAverages.reduce(
        (maxIndex, current, index) => current.average > monthAverages[maxIndex].average ? index : maxIndex,
        0
    );

    const mostProductiveMonth = months[mostProductiveMonthIndex];

    return {
        total: totalContributions,
        averagePerDay: parseFloat(averagePerDay.toFixed(2)),
        averagePerWeek: parseFloat(averagePerWeek.toFixed(2)),
        longestStreak,
        currentStreak,
        mostProductiveDay,
        mostProductiveMonth
    };
}

export { calculateStats };
export type { ContributionStats };