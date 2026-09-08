export type TimerProps = {
    timeLeft: number;
    maxTime: number;
    isEnabled: boolean;
    isPaused: boolean;
    onTogglePaused: () => void;
};
