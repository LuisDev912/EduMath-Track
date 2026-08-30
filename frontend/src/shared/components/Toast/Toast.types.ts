export type ToastProps = {
    title: string;
    content: string;
    variant: string;
    durationTime?: number;
    id: string;
    onClose: () => void;
};