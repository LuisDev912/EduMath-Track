import type { UserMenuItemProps } from './UserMenuItem.types';
import { NavLink } from 'react-router';
import Styles from '../UserMenu.module.css';

function UserMenuItem({ children, onClick, to }: UserMenuItemProps) {
    if (to) {
        return (
            <li role="none">
                <NavLink
                    to={to}
                    className={Styles.itemLink}
                    role="menuitem"
                    onClick={onClick}
                >
                    {children}
                </NavLink>
            </li>
        );
    };

    return (
        <li role="none">
            <button
                type="button"
                className={Styles.itemButton}
                role="menuitem"
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    );
}

export default UserMenuItem;