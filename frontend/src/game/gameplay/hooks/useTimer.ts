import { useCallback, useEffect, useState } from "react";

export function useTimer(initialTime: number, isRunning = true, onComplete?: () => void) {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        setTimeLeft(initialTime);
    }, [initialTime]);

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const intervalId = window.setInterval(() => {
            setTimeLeft(prev => {
                const nextTime = Math.max(prev - 1, 0);

                if (nextTime === 0) {
                    window.setTimeout(() => onComplete?.(), 0);
                }

                return nextTime;
            });
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [isRunning, onComplete, timeLeft]);

    const timerReset = useCallback(() => {
        setTimeLeft(initialTime);
    }, [initialTime]);

    return {
        timeLeft,
        timerReset
    };
};
