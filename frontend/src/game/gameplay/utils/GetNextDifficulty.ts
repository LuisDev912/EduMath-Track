import type { Difficulty } from '../types/Game.types.ts';

export function getNextDifficulty(
    currentDifficulty: Difficulty,
    score: number
): Difficulty {
    return "easy";
};