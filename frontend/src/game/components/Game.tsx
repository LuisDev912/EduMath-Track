import { Activity, useState } from "react";

function Game() {
    const [gameConfig, setGameConfig] = useState({
        firstNumber: 0,
        secondNumber: 0,
        isCorrect: false,
        error: false
    });

    const generateNumbers = () => {
        const a = Math.floor(Math.random() * 50) + 1;
        const b = Math.floor(Math.random() * 50) + 1;


    }

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