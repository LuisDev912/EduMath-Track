import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import type { NextQuestionCountdownProps } from "./NextQuestionCountdown.types.ts";

function NextQuestionCountdown({ countdown }: NextQuestionCountdownProps) {
    const { t } = useTranslation();
    const displayCountdown = Math.ceil(countdown);
    const [seconds, setSeconds] = useState(displayCountdown);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });

        }, 1000);
        return () => clearInterval(timer);
    }, [displayCountdown]);

    return (
        <p aria-live="polite">
            {t("game.nextQuestion",
                {
                    countdown: seconds,
                }
            )}
        </p>
    )
};

export default NextQuestionCountdown;