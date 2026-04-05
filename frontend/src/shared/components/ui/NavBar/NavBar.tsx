import type { NavProps } from './Nav.types.ts';
import NavStyles from './NavBar.module.css';

export function NavBar({ children, listType = 'ul', className = '', ...props }: NavProps) {
    const listTag = listType;
    return (
        <nav className={NavStyles.navBar}>
            {listType === 'ol' ? (
                <ol className={NavStyles.navList}>
                    <li>{children}</li>
                </ol>
            ) : (
                <ul className={NavStyles.navList}>
                    <li>{children}</li>
                </ul>
            )}
        </nav>
    );
};