import type { NavProps } from './Nav.types.ts';
import Styles from './NavBar.module.css';

export function NavBar({ children, listType }: NavProps) {
    return (
        <nav className={Styles.navBar}>
            {listType === 'ordered' ? (
                <ol className={Styles.navList}>
                    <li>{children}</li>
                </ol>
            ) : (
                <ul className={Styles.navList}>
                    <li>{children}</li>
                </ul>
            )}
        </nav>
    );
};