export type GameMode =
    | "addition"
    | "subtraction"
    | "multiplication"
    | "division";

export type Difficulty = "tutorial" | "easy" | "medium" | "hard";

export type Question = {
    firstNumber: number;
    secondNumber: number;
    operator: string;
    answer: number;
}