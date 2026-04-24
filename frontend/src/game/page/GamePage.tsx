import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import type { Difficulty, GameMode } from "../types/Game.types";
import { useGame } from "../hooks/useGame";
import Game from "../components/GameComponent/Game";

export default function GamePage() {
    const { mode } = useParams();
    const { t } = useTranslation();

    const validModes = ["addition", "subtraction", "multiplication", "division"];
    const difficulty: Difficulty = "easy"; // this will be dynamic in the future, for now we set it to easy
    const game = useGame(mode as GameMode, difficulty);

    if (!mode || !validModes.includes(mode)) {
        return <p>Invalid mode</p>
    };

    return (
        <section className="flex flex-column align-center">
            <h1 className="heading-primary">{t("game.title")}</h1>

            <Game game={game} />
        </section>
    );
};