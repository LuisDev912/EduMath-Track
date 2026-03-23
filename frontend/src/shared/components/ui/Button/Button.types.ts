export type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    textDirection?: "center" | "left" | "right";
    fullWidth?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// primary: main action (blue)
// secondary: alternative
// ghost: no background
// danger: logout/delete