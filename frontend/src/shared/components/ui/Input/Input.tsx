import type { InputProps } from './Input.types';
import InputStyles from './Input.module.css';

// this Input component is for improve consistency across the app, and to make it easier to change the styles of all inputs in one place

export function Input({ label, error, ref, ...props }: InputProps) {
    return (
        <div className={InputStyles.wrapper}>
            {label && <label className='sr-only'>{label}</label>}

            <input
                ref={ref}
                className={InputStyles.input}
                {...props}
            />

            {error && <span className={InputStyles.error}>{error}</span>}
        </div>
    )
};