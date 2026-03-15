import { useRef, useState } from 'react';
import UserMenuButton from './UserMenuButton/UserMenuButton';
import UserMenuDropdown from './UserMenuDropdown/UserMenuDropdown';
import Styles from './UserMenu.module.css';

export type UserMenuProps = {
    userName?: string;
};

function UserMenu({ userName }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);

    

    return (
        <div className={Styles.profileIcon}>
            <UserMenuButton isOpen={isOpen} onToggle={toggle} userName={userName} />
            {isOpen && (
                <UserMenuDropdown userName={userName} onClose={close} />
            )}
        </div>
    );
}

export default UserMenu;