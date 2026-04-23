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

    let a = Math.floor(Math.random() * max) + 1
    let b = Math.floor(Math.random() * max) + 1

    switch (mode) {
        case "addition":
            return {
                a, b,
                operator: "+",
                answer: a + b
            };

        case "subtraction":
            if (a < b) [a, b] = [b, a];

            return {
                a, b,
                operator: "-",
                answer: a - b
            };

        case "multiplication":
            return {
                a, b,
                operator: "X",
                answer: a * b
            };

        case "division":
            while (b === 0 || a % b !== 0) {
                a = Math.floor(Math.random() * max) + 1
                b = Math.floor(Math.random() * max) + 1
            };

            return {
                a, b,
                operator: "÷",
                answer: a / b
            };
    };
};