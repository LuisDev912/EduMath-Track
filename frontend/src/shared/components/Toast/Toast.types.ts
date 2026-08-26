export type ToastProps = {
    title: string;
    content: string;
    variant: "danger" | "default";
    durationTime?: number;
}