import { useState, useRef, useEffect } from 'react';

// components
import UserMenuButton from './UserMenuButton/UserMenuButton.tsx';
import UserMenuDropdown from './UserMenuDropdown/UserMenuDropdown.tsx';

// other
import Styles from './UserMenu.module.css';
import type { UserMenuProps } from './UserMenu.types.ts';

function UserMenu({ userName }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (
                isOpen &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                close();
            }
        }
        function handleKeyDown(event: KeyboardEvent) {
            if (isOpen && event.key === 'Escape') {
                close();
            }
        }

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div className={Styles.profileIcon} ref={containerRef}>
            <UserMenuButton isOpen={isOpen} onToggle={toggle} userName={userName} />
            {isOpen && (
                <UserMenuDropdown userName={userName} onClose={close} />
            )}
        </div>
    );
}

export default UserMenu;