import type { Difficulty } from '../types/Game.types.ts';

export function getNextDifficulty(
    currentDifficulty: Difficulty,
    score: number
): Difficulty {
    if (currentDifficulty === "tutorial" && score >= 10) { 
        return "easy";
    };

    if (currentDifficulty === "easy" && score >= 25) {
        return "medium";
    };

    if (currentDifficulty === "medium" && score >= 50) {
        return "hard";
    };

    return currentDifficulty;
};