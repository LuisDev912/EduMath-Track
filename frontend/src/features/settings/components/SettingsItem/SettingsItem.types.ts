export type SelectOption = {
    label: string;
    value: string;
};

export type SettingItemProps = {
    title: string;
    description?: string;
    actionType: 'link' | 'button' | 'select';
    options?: SelectOption[];
    value?: string;
    id?: string;
    action?: (value?: string) => void;
};