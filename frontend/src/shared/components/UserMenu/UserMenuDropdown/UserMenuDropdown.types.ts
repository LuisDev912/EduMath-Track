import type { UserMenuProps } from '../UserMenu.types.ts';

export type UserMenuDropdownProps = UserMenuProps & {
    onClose: () => void;
};