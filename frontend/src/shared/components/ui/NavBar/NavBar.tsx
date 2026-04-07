import type { NavProps } from './Nav.types.ts';
import NavStyles from './NavBar.module.css';

export function NavBar({
    children,
    className = '',
    ...props
}: NavProps) {
    return (
        <nav
            className={`${NavStyles.nav} ${className}`}
            {...props}
        >
            <ul className={NavStyles.navList}>
                {children}
            </ul>
        </nav>
    );
};