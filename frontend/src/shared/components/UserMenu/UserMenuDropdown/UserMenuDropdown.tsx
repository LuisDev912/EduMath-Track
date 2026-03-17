import type { UserMenuDropdownProps } from './UserMenuDropdownProps';
import { useTranslation } from 'react-i18next';
import UserMenuItem from '../UserMenuItem/UserMenuItem';
import Styles from '../UserMenu.module.css';

function UserMenuDropdown({ userName, onClose }: UserMenuDropdownProps) {
    const { t } = useTranslation();

    const handleLogout = () => {
        onClose();
    };

    return (
        <div
            id="user-menu-dropdown"
            className={Styles.dropdown}
            role="menu"
            aria-label={t('nav.profileAriaLabel')}
        >
            <div className={Styles.userInfo}>
                <span className={Styles.userName}>
                    {userName ||  t('userMenu.guest')}
                </span>
            </div>
            <ul className={`${Styles.menuList}`}>
                <UserMenuItem to="/profile" onClick={onClose}>
                    {t('userMenu.profile')}
                </UserMenuItem>
                <UserMenuItem onClick={handleLogout}>
                    {t('userMenu.logout')}
                </UserMenuItem>
            </ul>
        </div>
    );
}

export default UserMenuDropdown;