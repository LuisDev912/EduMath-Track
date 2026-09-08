import { useState } from "react";
import { useNavigate } from "react-router-dom"
import type { Difficulty, GameMode } from "../types/Game.types.ts";
import { generateQuestion } from "../utils/GenerateQuestion.ts";

export function useGame(
    mode: GameMode,
    difficulty: Difficulty
) {
    // --- State variables ---
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(() => {
        return generateQuestion(mode, difficulty);
    });
    const navigate = useNavigate();

    // --- Functions ---
    const nextQuestion = () => {
        setQuestion(generateQuestion(mode, difficulty));
    };

    const handleValidation = (answer: number): boolean => {
        const isCorrect = answer === question.answer;
        if (isCorrect) {
            setScore(prev => prev + 1);
        } else {
            setScore(0);
        };

        return isCorrect;
    };

    const handleDifficultyChange = (score: number, difficulty: string): void => {
        if (score > 3 && difficulty === "tutorial") { 
            navigate("/")
        };
    };

    return {
        score,
        question,
        difficulty,
        nextQuestion,
        handleValidation,
        handleDifficultyChange
    };
};