import type { NextQuestionCountdownProps } from "./NextQuestionCountdown.types.ts";
import { useTranslation } from "react-i18next";

function NextQuestionCountdown({ countdown }: NextQuestionCountdownProps) {
    const { t } = useTranslation();
    const displayCountdown = Math.ceil(countdown);

    return (
        <p aria-live="polite">
            {t("game.nextQuestion",
                {
                    countdown: displayCountdown,
                }
            )}
        </p>
    )
};

export default NextQuestionCountdown;