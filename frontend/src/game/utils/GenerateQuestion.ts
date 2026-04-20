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

    switch (mode) {
        case "addition":
            return {
                operator: "+",
                answer: firstNumber + secondNumber
            };

        case "subtraction":
            if (firstNumber < secondNumber) { // ensure the first number is greater than the second to avoid negative answers
                [firstNumber, secondNumber] = [secondNumber, firstNumber]
            };
            
            return {
                operator: "-",
                answer: firstNumber - secondNumber
            };

        case "multiplication":
            return {
                operator: "X",
                answer: firstNumber * secondNumber
            };

        case "division":
            while (secondNumber === 0 || firstNumber % secondNumber !== 0) { // ensure the second number is not zero and the first number is divisible by the second to avoid fractional answers
                firstNumber = Math.floor(Math.random() * max) + 1
                secondNumber = Math.floor(Math.random() * max) + 1
            };

            return {
                operator: "÷",
                answer: firstNumber / secondNumber
            };
    };
}