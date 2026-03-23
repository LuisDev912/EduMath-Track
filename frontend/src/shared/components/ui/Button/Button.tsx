import ButtonStyles from './Button.module.css';
import type { ButtonProps } from './Button.types';

// this Button component is for improve consistency across the app, and to make it easier to change the styles of all buttons in one place
export function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={[
                ButtonStyles.button,
                ButtonStyles[variant],
                // e.g. ButtonStyles.sm, ButtonStyles.md, ButtonStyles.lg
                ButtonStyles[size],
                fullWidth ? ButtonStyles.fullWidth : ''
            ].join(' ')}
            {...props}
        >
            {children}
        </button>
    );
};