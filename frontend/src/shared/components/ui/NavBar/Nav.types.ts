import type { ReactNode, HTMLAttributes } from "react";

export type NavProps = {
    children: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLElement>;