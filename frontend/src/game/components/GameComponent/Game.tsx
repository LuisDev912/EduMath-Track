import { Activity, useState } from "react";
import { useTranslation } from "react-i18next";
import type { GameConfig } from "../../types/Game.types.ts";
import Styles from '../Game.module.css';

// child components
import AnswerForm from "../AnswerForm.tsx";
import OperationDisplay from "../OperationDisplay.tsx";
import GenerateOperation from "../GenerateOperation.tsx";

function Game() {
    const { t } = useTranslation();
    const [result, setResult] = useState<null | boolean>(null);
    const [points, setPoints] = useState<number>(0);
    const [gameConfig, setGameConfig] = useState<GameConfig>({
        firstNumber: 0,
        secondNumber: 0
    });

    const generateNumbers = (): void => {
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;

        setResult(null);
        setGameConfig({
            firstNumber: a,
            secondNumber: b
        });
    };

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
