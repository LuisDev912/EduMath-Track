export type Options = {
    optionLabel: string;
    optionValue: string;
}

export type SelectProps = {
    label: string;
    value: string;
    options: Options[];
    action: (value: string) => void;
    id?: string;
};