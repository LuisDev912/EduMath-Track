function Timer({ timeLeft, maxTime, onEnd }: { timeLeft: number; maxTime: number; onEnd: () => void }) { 
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