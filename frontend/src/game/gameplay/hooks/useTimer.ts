import { useState, useEffect } from "react";

export function useTimer(initialTime: number) { 
    const [timeLeft, setTime] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const timerReset = () => {
        setTime(initialTime);
    };

    return {
        timeLeft,
        timerReset
    };
};  