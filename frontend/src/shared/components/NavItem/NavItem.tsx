import { NavLink } from 'react-router-dom';
import type { itemProps } from '../../types/NavItemProps';
import LinkStyles from './NavItem.module.css';

function NavItem({ to, children }: itemProps) {
    return <NavLink
        to={to}
        className={({ isActive }) =>
            isActive
                ? `${LinkStyles.itemAnchor} ${LinkStyles.active}`
                : LinkStyles.itemAnchor
        }
    >
        {children}

    </NavLink>
};

export default NavItem;