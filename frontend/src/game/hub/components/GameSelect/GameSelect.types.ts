export type GameSelectProps = {
    mode: string;
    difficulty: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
    setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};