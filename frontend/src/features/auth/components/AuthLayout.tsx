import type { AuthLayoutProps } from "./Auth.types";

function AuthLayout({ children, id }: AuthLayoutProps) {
    return (
        <section id={id} className="transparent-border flex flex-column justify-center m-auto max-w-600px">
            {children}
        </section>
    )
};

export default AuthLayout;