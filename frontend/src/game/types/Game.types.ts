export type GameConfig = {
    firstNumber: number;
    secondNumber: number;
};

export type GameMode =
    | "addition"
    | "subtraction"
    | "multiplication"
    | "division";

export type Difficulty = "tutorial" | "easy" | "medium" | "hard";

export type Question = {
    operator: string;
    answer: number;
}