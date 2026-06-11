import { useState } from "react";
import { useTranslation } from "react-i18next";
import Styles from './Game.module.css';

// child components
import AnswerForm from "./AnswerForm.tsx";
import OperationDisplay from "./OperationDisplay.tsx";
import GenerateOperation from "./GenerateOperation.tsx";
import type { useGame } from "../hooks/useGame.tsx";

type Props = {
    game: ReturnType<typeof useGame>;
}

function Game({ game }: Props) {
    const { t } = useTranslation();
    const [result, setResult] = useState<boolean | null>(null);

    const { question, score, handleValidation, isAnswered } = game;

    const handleSubmit = (answer: number) => {
        if (isAnswered) return; // prevent validating the answer multiple times

        const isCorrect = handleValidation(answer);
        setResult(isCorrect);
    };

    return (
        <section className={Styles.box}>
            <OperationDisplay question={question} />

            <AnswerForm
                onValidate={handleSubmit}
                disabled={isAnswered}
            />

            <GenerateOperation onGenerate={() => game.nextQuestion()} />

            {result === true &&
                <p
                    className="correct-text"
                >
                    {t("game.feedback.correct")}
                </p>
            }

            {result === false &&
                <p
                    className="incorrect-text"
                >
                    {t("game.feedback.incorrect", { answer: question.answer })}
                </p>
            }

            <p>{t("game.score", { score })}</p>
        </section>
    );
};

export default Game;