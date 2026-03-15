import Avatar from './Avatar/Avatar';
import Styles from './UserMenu.module.css';

export type UserMenuProps = {
    userName?: string;
};

function UserMenu({ userName }: UserMenuProps) {
    

    return (
        <div className={Styles.profileIcon}>
            <Avatar name="John Doe" />
        </div>
    );
}

export default UserMenu;