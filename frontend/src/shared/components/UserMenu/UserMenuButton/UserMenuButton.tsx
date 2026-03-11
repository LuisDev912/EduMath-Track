import Avatar from "../Avatar/Avatar";
import type { UserMenuButtonProps } from "./UserMenuButtonProps";

function UserMenuButton({ isOpen, onToggle, userName }: UserMenuButtonProps) {
    
    return (
        <button
            type="button"
            className="userMenuButton"
            onClick={onToggle}
        >
            <Avatar />
        </button>
    )
};

export default UserMenuButton;