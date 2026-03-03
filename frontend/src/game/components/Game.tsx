import { Activity, useState } from "react";
import type { GameConfig } from "../../shared/types/GameConfig";

function Game() {
    const [result, setResult] = useState<null | boolean>(null);
    const [gameConfig, setGameConfig] = useState<GameConfig>({
        firstNumber: 0,
        secondNumber: 0
    });

    const generateNumbers = () => {
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;

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

            <Activity mode={result ? "visible" : "hidden"}>
                <p>
                    example
                </p>
            </Activity>
        </section>
    )
};

export default Game;