import type { AuthLayoutProps } from "../../../shared/types/AuthProps";

function AuthLayout({ children, id }: AuthLayoutProps) {
    return (
        <section id={id} className="transparent-border">
            {children}
        </section>
    )
};

export default AuthLayout;