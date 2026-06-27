import { useTranslation } from "react-i18next";
import type { TimerProps } from "./Timer.types.ts";

function Timer({
    timeLeft,
    maxTime,
    isEnabled,
    isPaused,
    onToggleEnabled,
    onTogglePaused
}: TimerProps) {
    const { t } = useTranslation();

    return (
        <div>
            <label htmlFor="game-timer" className="sr-only">
                {t("game.timer.timeLeft", { seconds: timeLeft })}
            </label>
            <progress id="game-timer" value={timeLeft} max={maxTime} className="timer">
                {timeLeft}
            </progress>

            <div className="flex justify-center">
                <button type="button" onClick={onToggleEnabled}>
                    {isEnabled ? t("game.timer.disable") : t("game.timer.enable")}
                </button>
                <button type="button" onClick={onTogglePaused} disabled={!isEnabled}>
                    {isPaused ? t("game.timer.resume") : t("game.timer.pause")}
                </button>
            </div>
        </div>
    );
};

export default Timer;
