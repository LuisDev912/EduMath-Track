import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Styles from './Game.module.css';

// child components
import AnswerForm from "./AnswerForm.tsx";
import OperationDisplay from "./OperationDisplay.tsx";
import GenerateOperation from "./GenerateOperation.tsx";
import NextQuestionCountdown from "./NextQuestionCountdown.tsx";
import type { useGame } from "../hooks/useGame.tsx";

type Props = {
    game: ReturnType<typeof useGame>;
}

function Game({ game }: Props) {
    const { t } = useTranslation();
    // state variables
    const [result, setResult] = useState<boolean | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // destructure game state and functions
    const { question, score, handleValidation } = game;

    const TIMEOUT_DURATION = 3000;

    // functions to handle user interactions
    const handleSubmit = useCallback((answer: number) => {
        if (isAnswered) return; // prevent validating the answer multiple times

        const isCorrect = handleValidation(answer);

        setResult(isCorrect);
        setIsAnswered(true);
    }, [isAnswered, handleValidation]);

    const handleNextQuestion = useCallback(() => {
        game.nextQuestion();
        setResult(null);
        setIsAnswered(false);
    }, [game]);

    // side effect to reset result and load next question after a delay
    useEffect(() => { 
        if (result === null) return;

        const timer = setTimeout(() => {
            setResult(null);
            handleNextQuestion();
        }, TIMEOUT_DURATION);
        
        return () => clearTimeout(timer);
    }, [result, handleNextQuestion]);

    // render the game interface
    return (
        <section className={Styles.box}>
            <OperationDisplay question={question} />

            <AnswerForm
                onValidate={handleSubmit}
                disabled={isAnswered}
            />

            <GenerateOperation onGenerate={handleNextQuestion} />

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

            {isAnswered && <NextQuestionCountdown countdown={TIMEOUT_DURATION / 1000} />}

            <p>{t("game.score", { score })}</p>
        </section>
    );
};

export default Game;