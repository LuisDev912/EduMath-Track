export type SettingItemProps = {
    title: string;
    description?: string;
    actionType: 'link' | 'button';
    action?: () => void;
};