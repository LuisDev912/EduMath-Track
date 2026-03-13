import type { AvatarProps } from "./AvatarProps.type";
import Styles from '../UserMenu.module.css';

function Avatar({ name }: AvatarProps) {
    const initial = name?.charAt(0).toUpperCase();

    return (
        <div className={Styles.avatar}>
            {initial}
        </div>
    );
};

export default Avatar;