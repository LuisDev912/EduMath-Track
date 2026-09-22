import type { UserMenuProps } from "../UserMenu.types.ts";
import Styles from '../UserMenu.module.css';

function Avatar({ userName }: UserMenuProps) {
    const initial = userName?.charAt(0).toUpperCase();

    return (
        <div className={Styles.avatar}>
            {initial}
        </div>
    );
};

export default Avatar;