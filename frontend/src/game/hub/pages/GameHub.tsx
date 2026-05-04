import { useTranslation } from "react-i18next";
import Styles from '../../gameplay/components/Game.module.css';

import FinalLink from "../components/FinalLink/FinalLink";

// this is the hub page for the game. Here, the user will select the wanted game mode and difficulty. The user will also be able to see their stats and achievements.

export default function GameHub() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-column align-center">
            <div className={Styles.box}>
                <h1>{t("game.hub.title")}</h1>
                <p>{t("game.hub.description")}</p>
                
                {/* hardcoded for testing purposes */}
                <FinalLink
                    mode="addition"
                    difficulty="easy"
                />
            </div>

        </section>
    );
};