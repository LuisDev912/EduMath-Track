function Timer({ timeLeft }: { timeLeft: number; }) { 
    return (
        <div>
            <label htmlFor="timer">Time Left: {timeLeft} seconds</label>
            <progress value={timeLeft} max="100" className="timer">
                {timeLeft}
            </progress>
        </div>
    )
};

export default Timer;