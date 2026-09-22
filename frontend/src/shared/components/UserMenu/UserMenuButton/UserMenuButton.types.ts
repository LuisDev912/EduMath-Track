import type { UserMenuProps } from '../UserMenu.types.ts';

export type UserMenuButtonProps = UserMenuProps & {
    isOpen: boolean;
    onToggle: () => void;
};