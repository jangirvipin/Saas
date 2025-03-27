type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';

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

export default getDifficultyData;