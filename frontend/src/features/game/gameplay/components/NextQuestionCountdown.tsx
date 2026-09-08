import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import type { Timer } from "../types/Game.types.ts";

function NextQuestionCountdown({ countdown }: Timer) {
    const { t } = useTranslation();
    const [seconds, setSeconds] = useState(countdown);

    // timer to update the countdown every second
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev > 0) return prev - 1;

                clearInterval(timer);
                return 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

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