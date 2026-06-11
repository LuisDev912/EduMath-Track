import { forwardRef } from 'react';
import type { InputProps } from './Input.types.ts';
import InputStyles from './Input.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>((
    { label,
        error,
        id,
        disableInput,
        ...props
    }: InputProps, ref) => {
    return (
        <div>
            
            {label && <label className='sr-only' htmlFor={id}>
                {label}
            </label>}

            <input
                id={id}
                ref={ref}
                className={InputStyles.input}
                disabled={disableInput}
                {...props}
            />

            {error && <span className={InputStyles.error}>{error}</span>}
        </div>
    )
});