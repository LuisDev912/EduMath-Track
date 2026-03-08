import { useState, Activity } from 'react';
import Avatar from './Avatar/Avatar';
import Styles from './UserMenu.module.css';

function UserMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className='user-menu'>

            <Avatar name="John Doe" />
        </div>
    );
};

export default UserMenu;