import { Activity, useState } from "react";
import type { GameConfig } from "../../shared/types/GameConfig";

// child components
import AnswerForm from "./AnswerForm";
import OperationDisplay from "./OperationDisplay";
import GenerateOperation from "./GenerateOperation";

function Game() {
    const [result, setResult] = useState<null | boolean>(null);
    const [gameConfig, setGameConfig] = useState<GameConfig>({
        firstNumber: 0,
        secondNumber: 0
    });

    const generateNumbers = (): void => {
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;
        console.log(a)

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
            <GenerateOperation onGenerate={generateNumbers} />
            <OperationDisplay firstNum={gameConfig.firstNumber} secondNum={gameConfig.secondNumber} />

            <Activity mode={result ? "visible" : "hidden"}>
                <p>
                    example
                </p>
            </Activity>
        </section>
    )
};

export default Game;