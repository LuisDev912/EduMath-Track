export type SelectProps = {
    label: string;
    value: string;
    options: string[];
    action: (value?: string) => void;
    id?: string;
};