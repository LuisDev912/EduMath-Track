import type { ReactNode } from 'react';

export type UserMenuItemProps = {
    children: ReactNode;
    onClick?: () => void;
    to?: string;
};