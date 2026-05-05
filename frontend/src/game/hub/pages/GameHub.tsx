import { useTranslation } from "react-i18next";
import { Select } from '@components/ui/Select/Select.tsx';
import Styles from '../../gameplay/components/Game.module.css';

import FinalLink from "../components/FinalLink/FinalLink";

// this is the hub page for the game. Here, the user will select the wanted game mode and difficulty. The user will also be able to see their stats and achievements.

export default function GameHub() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-column align-center">
            <h1>{t("game.hub.title")}</h1>

            <div className={Styles.box}>
                <p>{t("game.hub.description")}</p>

                <div>
                    <Select
                        id="game-mode-select"
                        label={t("game.hub.selectMode")}
                        value="addition"
                        options={[
                            { optionLabel: t("game.hub.modes.addition"), optionValue: "addition" },
                            { optionLabel: t("game.hub.modes.subtraction"), optionValue: "subtraction" },
                            { optionLabel: t("game.hub.modes.multiplication"), optionValue: "multiplication" },
                            { optionLabel: t("game.hub.modes.division"), optionValue: "division" }
                        ]}
                        action={(val) => console.log(val)}
                    />

                    <Select
                        id="difficulty-select"
                        label={t("game.hub.selectDifficulty")}
                        value="easy"
                        options={[
                            { optionLabel: t("game.hub.difficulty.easy"), optionValue: "easy" },
                            { optionLabel: t("game.hub.difficulty.medium"), optionValue: "medium" },
                            { optionLabel: t("game.hub.difficulty.hard"), optionValue: "hard" }
                        ]}
                        action={(val) => console.log(val)}
                    />
                </div>
                
                {/* hardcoded for testing purposes */}
                <FinalLink
                    mode="addition"
                    difficulty="easy"
                />
            </div>

        </section>
    );
};