export type TimerProps = {
    timeLeft: number;
    maxTime: number;
    isEnabled: boolean;
    isPaused: boolean;
    onToggleEnabled: () => void;
    onTogglePaused: () => void;
};
