import { useId } from 'react';
import type { SelectProps } from './Select.types';
import Styles from './Select.module.css';

export function Select({ id }: SelectProps) {
    const selectId = useId();
    return (
        <select id={id || selectId} className={Styles.select}></select>
    );
};