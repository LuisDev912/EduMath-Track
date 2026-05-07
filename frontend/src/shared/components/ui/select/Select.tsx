import { useId } from 'react';
import type { SelectProps } from './Select.types';
import Styles from './Select.module.css';

export function Select({
    id,
    name,
    label,
    value,
    options,
    action,
    hideLabel = true,
}: SelectProps) {
    const generatedId = useId();
    const selectId = id || generatedId;

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        action(e.target.value);
    };

    return (
        <>
            <label htmlFor={selectId} className={hideLabel ? 'sr-only' : undefined}>
                {label}
            </label>

            <select
                className={Styles.select}
                value={value}
                onChange={handleSelectChange}
                id={selectId}
                name={name}
            >
                {options.map((opt) => (
                    <option key={opt.optionValue} value={opt.optionValue}>
                        {opt.optionLabel}
                    </option>
                ))}
            </select>
        </>
    );
};