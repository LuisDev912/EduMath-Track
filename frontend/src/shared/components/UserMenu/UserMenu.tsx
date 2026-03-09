import Avatar from './Avatar/Avatar';
import Styles from './UserMenu.module.css';

function UserMenu() {
    return (
        <div className={Styles.profileIcon}>
            <Avatar name="John Doe" />
        </div>
    );
};

export default UserMenu;