import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import type { Difficulty, GameMode } from "../types/Game.types.ts";
import { useGame } from "../hooks/useGame.ts";
import Game from "../components/Game.tsx";
import { useEffect } from "react";

export default function GamePage() {
    const { mode, difficulty } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const validDifficulties = ["tutorial", "easy", "medium", "hard"];
    const validModes = ["addition", "subtraction", "multiplication", "division"];
    const game = useGame(
        mode as GameMode,
        difficulty as Difficulty
    );

    useEffect(() => {
        if (!validDifficulties.includes(difficulty as string) || !validModes.includes(mode as string)) {
            console.warn(`Invalid mode or difficulty: ${mode}, ${difficulty}. Redirecting to default game.`);
            navigate("/game/addition/easy");
        }});

    return (
        <section className="flex flex-column align-center">
            <h1 className="heading-primary">{t("game.title")}</h1>

            <Game game={game} />
        </section>
    );
};