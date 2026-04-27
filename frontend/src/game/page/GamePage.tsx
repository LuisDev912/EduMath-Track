import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import type { Difficulty, GameMode } from "../types/Game.types";
import { useGame } from "../hooks/useGame";
import Game from "../components/GameComponent/Game";

export default function GamePage() {
    const { mode, difficulty } = useParams();
    const { t } = useTranslation();

    const validDifficulties = ["tutorial", "easy", "medium", "hard"];
    const validModes = ["addition", "subtraction", "multiplication", "division"];
    const game = useGame(
        mode as GameMode,
        difficulty as Difficulty
    );

    if (!mode || !validModes.includes(mode)) {
        return <p>Invalid mode</p>
    };

    if (!difficulty || !validDifficulties.includes(difficulty)) {
        return <p>Invalid difficulty</p>
    }

    return (
        <section className="flex flex-column align-center">
            <h1 className="heading-primary">{t("game.title")}</h1>

            <Game game={game} />
        </section>
    );
};