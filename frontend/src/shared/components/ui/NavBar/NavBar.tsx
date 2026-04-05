import type { NavProps } from './Nav.types.ts';
import NavStyles from './NavBar.module.css';

export function NavBar({ children,
    listType = 'ul',
    className = '',
    ...props}: NavProps) {
    const ListTag = listType; // capitalize the first letter to use as a component

    return (
        <nav
            className={`${NavStyles.nav} ${className}`}
            {...props}
        >
            <ListTag className={NavStyles.navList}>
                {children}
            </ListTag>
        </nav>
    );
};