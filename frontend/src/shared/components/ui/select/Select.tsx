import { useId } from 'react';
import type { SelectProps } from './Select.types';
import Styles from './Select.module.css';

export function Select({
    id,
    label,
    value,
    options,
    action,
}: SelectProps) {
    const selectId = useId();

    return (
        <>
            <label htmlFor={id || selectId} className="sr-only">
                {label}
            </label >

            <select
                className={Styles.select}
                value={value}
                onChange={action ? (e) => action(e.target.value) : undefined}
                id={id || selectId}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </>
    );
};