import type { TimerProps } from "./Timer.types.ts";

function Timer({
    timeLeft,
    maxTime,
    onEnd
}: TimerProps) { 
    if (timeLeft <= 0) onEnd();

    return (
        <div>
            <label htmlFor="timer" className="sr-only">Time Left: {timeLeft} seconds</label>
            <progress value={timeLeft} max={maxTime} className="timer">
                {timeLeft}
            </progress>
        </div>
    )
};

export default Timer;