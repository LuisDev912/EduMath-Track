import { Outlet, useLocation } from "react-router";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Footer, Header } from "@components/Semantic/Semantic.tsx";

function MainLayout() {
    const { t } = useTranslation();
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
                {t("layout.skipToContent")}
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
