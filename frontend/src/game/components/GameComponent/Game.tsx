import { Activity, useState } from "react";
import { useTranslation } from "react-i18next";
import Styles from '../Game.module.css';

// child components
import AnswerForm from "../AnswerForm.tsx";
import OperationDisplay from "../OperationDisplay.tsx";
import GenerateOperation from "../GenerateOperation.tsx";
import type { useGame } from "src/game/hooks/useGame.tsx";

type Props = {
    game: ReturnType<typeof useGame>;
}

function Game({game}: Props) {
    const { t } = useTranslation();

    return (
        <section className={Styles.box}>
            <OperationDisplay firstNum={gameConfig.firstNumber} secondNum={gameConfig.secondNumber} />
            <GenerateOperation onGenerate={generateNumbers} />
            <AnswerForm onValidate={handleValidation} />

            <Activity mode={result ? "visible" : "hidden"}>
                <p className="correct-text">
                    {t("game.feedback.correct")}
                </p>
            </Activity>

            <p>points: {points}</p>

            <Activity mode={result === false ? "visible" : "hidden"}>
                <p>
                    {t("game.feedback.incorrect", {
                        answer: gameConfig.firstNumber + gameConfig.secondNumber
                    })}
                </p>
            </Activity>
        </section>
    );
};

export default Game;
