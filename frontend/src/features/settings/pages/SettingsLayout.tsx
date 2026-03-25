import { Outlet, useLocation } from "react-router";
import SettingsHeader from "../components/SettingsHeader";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function SettingsLayout() {
    const location = useLocation();
    const { t } = useTranslation();
    const mainRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
        if (mainRef.current) mainRef.current.focus();
    }, [location.pathname]);
    return (
        <>
            <SettingsHeader />

            <button
                className="skip-link"
                onClick={() => {
                    mainRef.current?.focus();
                }}
            >
                {t("layout.skipToContent")}
            </button>

            <main
                ref={mainRef}
                tabIndex={-1}
                className="settings-layout"
            >

                <section className="settings-content">
                    <Outlet />
                </section>

            </main>
        </>
    );
};