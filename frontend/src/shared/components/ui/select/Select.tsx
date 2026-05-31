import { useId } from 'react';
import type { SelectProps } from './Select.types.ts';
import Styles from './Select.module.css';

export function Select({
    id,
    label,
    value,
    options,
    action
}: SelectProps) {
    const generatedId = useId();
    const selectId = id || generatedId;

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        action(e.target.value);
    };

    return (
        <>
            <label htmlFor={selectId} className='sr-only'>
                {label}
            </label>

            <select
                className={Styles.select}
                value={value}
                onChange={handleSelectChange}
                id={selectId}
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