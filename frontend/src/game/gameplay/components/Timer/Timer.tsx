import { useTranslation } from "react-i18next";
import type { TimerProps } from "./Timer.types.ts";
import { Button } from "@components/ui/Button/Button.tsx";

import { PauseIcon } from "@shared/icons/Pause.tsx";
import { ContinueIcon } from "@shared/icons/Continue.tsx";

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
                {/* <Button
                    onClick={onToggleEnabled}
                    aria-label={isEnabled ? t("game.timer.disable") : t("game.timer.enable")}>
                    {isEnabled ? t("game.timer.disable") : t("game.timer.enable")}
                </Button> 
                this button is commented out because the option to enable/disable the timer has to be in the settings menu, not in the game itself.
                */}

                <Button
                    onClick={onTogglePaused}
                    disabled={!isEnabled}
                    aria-label={isPaused ? t("game.timer.resume") : t("game.timer.pause")}
                >
                    {isPaused ? <PauseIcon /> : <ContinueIcon />}
                </Button>
            </div>
        </div>
    );
};

export default Timer;