import type { InputProps } from './Input.types';
import InputStyles from './Input.module.css';

// this Input component is for improve consistency across the app, and to make it easier to change the styles of all inputs in one place

export function Input({ label, error, ...props }: InputProps) {
    return (
        <div className={InputStyles.wrapper}>
            {label && <label>{label}</label>}

            <input
                className={InputStyles.input}
                {...props}
            />

            {error && <span className={InputStyles.error}>{error}</span>}
        </div>
    )
};