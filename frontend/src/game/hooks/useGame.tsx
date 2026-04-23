import { useState } from "react";
import type { Difficulty, GameMode } from "../types/Game.types";
import { generateQuestion } from "../utils/GenerateQuestion";

export function useGame(
    mode: GameMode,
    difficulty: Difficulty
) {
    // --- State variables ---
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(() => {
        return generateQuestion(mode, difficulty);
    });

    // --- Functions ---
    const nextQuestion = () => {
        setQuestion(generateQuestion(mode, difficulty));
    };

    const handleValidation = (answer: number): boolean => {
        const isCorrect = answer === question.answer;
        if (isCorrect) {
            // use an if-else statement instead of a ternary operator for better readability and change two things at the same time
            setScore(prev => prev + 1);
        } else {
            setScore(0); // this might change in the future, for now we reset score to 0 when the answer is incorrect
        };

        nextQuestion();
        return isCorrect;
    };

    return {
        score,
        question,
        nextQuestion,
        handleValidation
    };
};