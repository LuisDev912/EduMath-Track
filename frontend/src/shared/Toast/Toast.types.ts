export type ToastVariant =
    | "default"
    | "success"
    | "warning"
    | "error";

export type ToastData = {
    id: string;
    title: string;
    content: string;
    variant: ToastVariant;
    durationTime: number;
    onClose: () => void;
};