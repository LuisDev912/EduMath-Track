import { useTranslation } from "react-i18next";
import Game from "../game/components/Game"
export default function GamePage() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-column align-center">
            <h1 className="heading-primary">{t("game.title")}</h1>

            <Game />
        </section>
    )
};
