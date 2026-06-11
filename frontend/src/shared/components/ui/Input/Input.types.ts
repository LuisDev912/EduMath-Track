export type InputProps = {
    label?: string;
    error?: string;
    id: string;
    disableInput?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;