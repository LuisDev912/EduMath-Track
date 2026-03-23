import type { UserMenuItemProps } from './UserMenuItem.types';
import { NavLink } from 'react-router';
import { Button } from "@components/ui/Button/Button.tsx";
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
            <Button
                variant="danger"
                size="md"
                textDirection='left'
                fullWidth={true}
                onClick={onClick}
            >
                {children}
            </Button>
        </li>
    );
}

export default UserMenuItem;