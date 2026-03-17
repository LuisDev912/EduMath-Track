import Avatar from "../Avatar/Avatar";
import type { UserMenuButtonProps } from "./UserMenuButton.types";
import Styles from '../UserMenu.module.css';

import { useTranslation } from 'react-i18next';

function UserMenuButton({ isOpen, onToggle, userName }: UserMenuButtonProps) {
    const { t } = useTranslation();

    return (
        <button
            type="button"
            aria-label={isOpen ? t('userMenu.closeMenu') : t('userMenu.openMenu')}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-controls="user-menu-dropdown"
            onClick={onToggle}
            className={Styles.userMenuButton}
        >
            <Avatar name={userName} />
        </button>
    )
};

export default UserMenuButton;