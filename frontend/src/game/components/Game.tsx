import { Activity, useState } from "react";
import type { GameConfig } from "../../shared/types/GameConfig";

function Game() {
    const [gameConfig, setGameConfig] = useState<GameConfig>({
        firstNumber: 0,
        secondNumber: 0,
        isCorrect: false,
        error: false
    });

    const generateNumbers = () => {
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;

        setGameConfig(({
            firstNumber: a,
            secondNumber: b,
            isCorrect: false,
            error: false
        }));
    };

    return (
        <section className="box">

            <Activity mode="hidden">
                <p>
                    example
                </p>
            </Activity>
        </section>
    )
};

export default Game;