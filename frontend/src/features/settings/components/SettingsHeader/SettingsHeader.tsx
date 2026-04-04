import { useTranslation } from "react-i18next";
import { SETTINGS_ROUTES } from "./Settings.config.ts";
import { useLocation } from "react-router";
import NavItem from "@components/NavItem/NavItem";

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
        <header className="settings-header">
            <nav aria-label="breadcrumb">
                <ol>
                    <li>
                        <NavItem to="/settings">
                            {t("settings.title")}
                        </NavItem>
                    </li>

                    {currentRoute && (
                        <li aria-current="page">
                            {t(currentRoute.labelKey)}
                        </li>
                    )}
                </ol>
            </nav>

            <h1>{pageTitle}</h1>
        </header>
    );
};

export default SettingsHeader;