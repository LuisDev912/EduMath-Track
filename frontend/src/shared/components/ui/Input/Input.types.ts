export type InputProps = {
    label?: string;
    error?: string;
    ref?: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;