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
    const selectId = useId(); // fallback id if none is provided

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        action?.(e.target.value);
    };

    return (
        <>
            {/* label element to improve accessibility */}
            <label htmlFor={id || selectId} className="sr-only">
                {label}
            </label >

            <select
                className={Styles.select}
                value={value}
                onChange={handleSelectChange}
                id={id || selectId}
            >
                {options?.map((opt) => (
                    <option key={opt.optionValue} value={opt.optionValue}>
                        {opt.optionLabel}
                    </option>
                ))}
            </select>
        </>
    );
};