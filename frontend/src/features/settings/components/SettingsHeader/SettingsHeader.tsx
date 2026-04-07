import { useTranslation } from "react-i18next";
import { SETTINGS_ROUTES } from "./Settings.config.ts";
import { useLocation } from "react-router";
import { NavBar } from "@components/ui/NavBar/NavBar.tsx";
import Styles from "../Settings.module.css";
import NavItem from "@components/NavItem/NavItem.tsx";

function SettingsHeader() {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const segment = pathname.split("/")[2];

    const currentRoute = SETTINGS_ROUTES.find(
        route => route.path === segment
    );
    
    const pageTitle = currentRoute
    ? t(currentRoute.labelKey)
    : t("settings.title");
    
    return (
        <header className={Styles.header}>
            <h1>{pageTitle}</h1>
            <nav aria-label="breadcrumb" className={Styles.breadcrumbNav}>
                <ol>
                    <li>
                        <NavItem to="/settings">
                            {t("settings.title")}
                        </NavItem>
                    </li>

                    {currentRoute && (
                        <>
                            <span aria-hidden="true" className={Styles.breadcrumbSeparator}>
                                /
                            </span>
                            <li aria-current="page" className={Styles.breadcrumbCurrent}>
                                {t(currentRoute.labelKey)}
                            </li>
                        </>
                    )}
                </ol>
            </nav>

            <NavBar aria-label="Main navigation">
                {SETTINGS_ROUTES.map(route => (
                    <li key={route.path}>
                        <NavItem to={`/settings/${route.path}`}>
                            {t(route.labelKey)}
                        </NavItem>
                    </li>
                ))}
            </NavBar>

        </header>
    );
};

export default SettingsHeader;