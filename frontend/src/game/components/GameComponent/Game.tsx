import { Activity, useState } from "react";
import { useTranslation } from "react-i18next";
import type { GameConfig } from "./Game.types";

// child components
import AnswerForm from "../AnswerForm";
import OperationDisplay from "../OperationDisplay";
import GenerateOperation from "../GenerateOperation";

function Game() {
    const { t } = useTranslation();
    const [result, setResult] = useState<null | boolean>(null);
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

    const handleValidation = (answer: number): void => {
        setResult(answer === gameConfig.firstNumber + gameConfig.secondNumber);
    };

    return (
        <section className="box">
            <OperationDisplay firstNum={gameConfig.firstNumber} secondNum={gameConfig.secondNumber} />
            <GenerateOperation onGenerate={generateNumbers} />
            <AnswerForm onValidate={handleValidation} />

            <Activity mode={result ? "visible" : "hidden"}>
                <p className="correct-text">
                    {t("game.feedback.correct")}
                </p>
            </Activity>

            <Activity mode={result === false ? "visible" : "hidden"}>
                <p>
                    {t("game.feedback.incorrect", {
                        answer: gameConfig.firstNumber + gameConfig.secondNumber
                    })}
                </p>
            </Activity>
        </section>
    )
};

export default Game;
