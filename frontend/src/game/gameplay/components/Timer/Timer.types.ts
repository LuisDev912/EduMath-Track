export type TimerProps = {
    timeLeft: number;
    maxTime: number;
    onEnd: () => void;
};