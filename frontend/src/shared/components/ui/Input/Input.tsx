import InputStyles from './Input.module.css';
import type { InputProps } from './Input.types';

// this Input component is for improve consistency across the app, and to make it easier to change the styles of all inputs in one place
export function Input({
    label,
    error,
    ...props
}: InputProps) { 
};