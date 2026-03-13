import type { UserMenuDropdownProps } from './UserMenuDropdownProps';
import UserMenuItem from '../UserMenuItem/UserMenuItem';
import Styles from '../UserMenu.module.css';

function UserMenuDropdown({ userName, onClose }: UserMenuDropdownProps) {

    const handleLogout = () => {
        onClose();
    };

    return (
        <div
            id="user-menu-dropdown"
            className={Styles.dropdown}
            role="menu"
            aria-label="user"
        >
            <div className={Styles.userInfo}>
                <span className={Styles.userName}>
                    {userName || "user"}
                </span>
            </div>
            <ul className={Styles.menuList}>
                <UserMenuItem to="/profile" onClick={onClose}>
                    profile
                </UserMenuItem>
                <UserMenuItem onClick={handleLogout}>
                    log out
                </UserMenuItem>
            </ul>
        </div>
    );
}

export default UserMenuDropdown;