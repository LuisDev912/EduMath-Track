import type { NavProps } from './Nav.types.ts';
import NavStyles from './NavBar.module.css';

export function NavBar({
    children,
    className = '',
    showOverflow = false,
    ...props
}: NavProps) {
    return (
        <nav
            className={`${NavStyles.nav} ${className} ${showOverflow ? NavStyles.overflow : ''}`}
            {...props}
        >
            <ul className={NavStyles.navList}>
                {children}
            </ul>
        </nav>
    );
};