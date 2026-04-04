import { useTranslation } from "react-i18next";

function SettingsHeader() { 
    const { t } = useTranslation();

    return (
        <header className="settings-header">
            <h1>{t("settings.title")}</h1>
        </header>
    );
};

export default SettingsHeader;