import type { AvatarProps } from "./AvatarProps.type";

function Avatar({name}: AvatarProps) {
    const initial = name?.charAt(0).toUpperCase();

    return (
        <div className="avatar">
            {initial}
        </div>
    );
};

export default Avatar;