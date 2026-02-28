import { Outlet, useLocation } from "react-router";
import { useRef, useEffect } from "react";
import { Footer, Header } from "../../shared/components/Semantic/Semantic";

function MainLayout() {
    const mainRef = useRef<HTMLElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (mainRef.current) mainRef.current.focus();
    }, [location.pathname]);

    return (
        <>
            <Header />

            <button
                className="skip-link"
                onClick={() => {
                    mainRef.current?.focus()
                }}
            >
                skip to content
            </button>

            <main
                id="public-content"
                tabIndex={-1}
                ref={mainRef}
            >
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;