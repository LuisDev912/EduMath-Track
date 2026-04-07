import type { ReactNode, HTMLAttributes } from "react";

export type NavProps = {
    children: ReactNode;
    className?: string;
    showOverflow?: boolean;
} & HTMLAttributes<HTMLElement>;