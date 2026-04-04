import { useTranslation } from "react-i18next";
import { SETTINGS_ROUTES } from "./Settings.config.ts";
import { useLocation } from "react-router";
import NavItem from "@components/NavItem/NavItem";

function SettingsHeader() { 
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const currentRoute = SETTINGS_ROUTES.find(route => pathname.includes(route.path));

    const title = currentRoute
        ? t(currentRoute.labelKey)
        : t("settings.title");

    return (
        <header className="settings-header">
            <nav aria-label="breadcrumb">
                <ol>
                    <li>
                        <NavItem
                            to="/settings"
                        >
                            {title}
                        </NavItem>
                        {currentRoute && (
                            <li aria-current="page">
                                {t(currentRoute.labelKey)}
                            </li>
                        )}
                    </li>
                </ol>
            </nav>

            <h1>{title}</h1>
        </header>
    );
};

export default SettingsHeader;