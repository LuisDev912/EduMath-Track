import type { UserMenuItemProps } from './UserMenuItemProps';
import Styles from '../UserMenu.module.css';

function UserMenuItem({ children, onClick }: UserMenuItemProps) {
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