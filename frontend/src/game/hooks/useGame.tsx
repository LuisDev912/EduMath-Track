import type { Difficulty, GameMode, Question } from "../types/Game.types";

export function generateQuestion(
    mode: GameMode,
    difficulty: Difficulty
): Question {
    const ranges = {
        tutorial: 5,
        easy: 10,
        medium: 50,
        hard: 100
    }

    const max = ranges[difficulty]

    let firstNumber = Math.floor(Math.random() * max) + 1
    let secondNumber = Math.floor(Math.random() * max) + 1

    
}