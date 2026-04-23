import { useState } from "react";
import type { Difficulty, GameMode } from "../types/Game.types";
import { generateQuestion } from "../utils/GenerateQuestion";

export function useGame(
    mode: GameMode,
    difficulty: Difficulty
) {
    // State variables
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(() => {
        generateQuestion(mode, difficulty);
    });

    // Functions

    return {
        score,
        question
    };
};