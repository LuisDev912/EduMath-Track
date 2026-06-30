import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Styles from './Game.module.css';

// child components
import AnswerForm from "./AnswerForm.tsx";
import OperationDisplay from "./OperationDisplay.tsx";
import GenerateOperation from "./GenerateOperation.tsx";
import NextQuestionCountdown from "./NextQuestionCountdown.tsx";
import Timer from "./Timer/Timer.tsx";

import { useGame } from "../hooks/useGame.ts";
import { useTimer } from "../hooks/useTimer.ts";
import type { Difficulty } from "../types/Game.types.ts";

const TIMER_STORAGE_KEY = "gameTimerEnabled";
const TIMER_DURATION_BY_DIFFICULTY: Record<Difficulty, number> = {
    tutorial: 60,
    easy: 30,
    medium: 20,
    hard: 10
};

type Props = {
    game: ReturnType<typeof useGame>;
}

function getSavedTimerEnabled() {
    return localStorage.getItem(TIMER_STORAGE_KEY) !== "false";
}

function Game({ game }: Props) {
    const { t } = useTranslation();
    // state variables
    const [result, setResult] = useState<boolean | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isTimerEnabled, setIsTimerEnabled] = useState(getSavedTimerEnabled);
    const [isTimerPaused, setIsTimerPaused] = useState(false);

    // destructure game state and functions
    const { question, score, difficulty, handleValidation } = game;

    const maxTime = TIMER_DURATION_BY_DIFFICULTY[difficulty];
    const isTimerRunning = isTimerEnabled && !isTimerPaused && !isAnswered;

    const TIMEOUT_DURATION = 3000;

    const handleTimerComplete = useCallback(() => {
        setResult(false);
        setIsAnswered(true);
    }, []);

    const { timeLeft, timerReset } = useTimer(maxTime, isTimerRunning, handleTimerComplete);

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
        setIsTimerPaused(false);
        timerReset();
    }, [game, timerReset]);

    const handleToggleTimerEnabled = useCallback(() => {
        setIsTimerEnabled(prev => {
            const nextValue = !prev;
            localStorage.setItem(TIMER_STORAGE_KEY, String(nextValue));

            return nextValue;
        });
        setIsTimerPaused(false);
        timerReset();
    }, [timerReset]);

    const handleToggleTimerPaused = useCallback(() => {
        setIsTimerPaused(prev => !prev);
    }, []);

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
            {isTimerEnabled && (
                <Timer
                    timeLeft={timeLeft}
                    maxTime={maxTime}
                    isEnabled={isTimerEnabled}
                    isPaused={isTimerPaused}
                onToggleEnabled={handleToggleTimerEnabled}
                onTogglePaused={handleToggleTimerPaused}
            /> )}
            <OperationDisplay question={question} />

            <AnswerForm
                onValidate={handleSubmit}
                disabled={isAnswered || (isTimerEnabled && isTimerPaused)}
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
