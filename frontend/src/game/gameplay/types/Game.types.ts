export type GameMode =
    | "addition"
    | "subtraction"
    | "multiplication"
    | "division";

export type Difficulty = "tutorial" | "easy" | "medium" | "hard";

export type Question = {
    a: number;
    b: number;
    operator: string;
    answer: number;
}