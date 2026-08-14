import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import type { Difficulty, GameMode } from "../types/Game.types.ts";
import { useGame } from "../hooks/useGame.ts";
import Game from "../components/Game.tsx";

export default function GamePage() {
    // destructure hooks and params
    const { mode, difficulty } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Define valid difficulties and modes
    const validDifficulties = ["tutorial", "easy", "medium", "hard"];
    const validModes = ["addition", "subtraction", "multiplication", "division"];
    const game = useGame(
        mode as GameMode,
        difficulty as Difficulty
    );

    // Check if the mode and difficulty are valid
    const isValidMode = validModes.includes(mode as string);
    const isValidDifficulty = validDifficulties.includes(difficulty as string);

    useEffect(() => {
        if (!isValidDifficulty || !isValidMode) {
            console.warn(`Invalid mode or difficulty: ${mode}, ${difficulty}. Redirecting to default game.`);

            navigate("/game/addition/easy");

            setTimeout(() => {
                console.clear();
            }, 7000);
        }
    });

    // Render the game page
    return (
        <section className="flex flex-column align-center">
            <h1 className="heading-primary">{t("game.title")}</h1>

            <Game game={game} />
        </section>
    );
};