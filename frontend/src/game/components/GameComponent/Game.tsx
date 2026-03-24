import { Activity, useState } from "react";
import { useTranslation } from "react-i18next";
import type { GameConfig } from "./Game.types";
import Styles from '../Game.module.css';

// child components
import AnswerForm from "../AnswerForm";
import OperationDisplay from "../OperationDisplay";
import GenerateOperation from "../GenerateOperation";

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

    const handleValidation = (answer: number): void => {
        const answerIsCorrect: boolean = answer === gameConfig.firstNumber + gameConfig.secondNumber;
        
        if (answerIsCorrect) {
        // use an if-else statement instead of a ternary operator for better readability and change two things at the same time
            setResult(answerIsCorrect);
            setPoints(prev => prev + 1);
        } else {
            setResult(answerIsCorrect);
            setPoints(0); // this might change in the future, for now we reset points to 0 when the answer is incorrect
        }
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
