import { NavLink } from 'react-router-dom';
import type { itemProps } from '../../types/navItemProps';
import LinkStyles from './NavItem.module.css';

function NavItem({ to, label }: itemProps) {
    return <NavLink
        to={to}
        aria-label={label}
        className={({ isActive }) =>
            isActive
                ? `${LinkStyles.itemAnchor} ${LinkStyles.active}`
                : LinkStyles.itemAnchor
        }
    >
        {label}

    </NavLink>
};

export default NavItem;