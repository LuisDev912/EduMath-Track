export type InputProps = {
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
    id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;