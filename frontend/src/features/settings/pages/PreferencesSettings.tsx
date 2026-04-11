import { useTranslation } from "react-i18next";
import SettingsItem from "../components/SettingsItem/SettingsItem.tsx";

export default function PreferencesSettings() {
    const { t, i18n } = useTranslation();
    
    return (
        <div>
            <SettingsItem
                title={t("settings.preferences.changeLanguage.title")}
                actionType="select"
                value={i18n.language}
                options={[
                    { value: "en", label: t("settings.preferences.changeLanguage.options.en") },
                    { value: "es", label: t("settings.preferences.changeLanguage.options.es") }
                ]}
                action={(value) => {
                    if (!value) return;
                    i18n.changeLanguage(value);
                }}
            />
        </div>
    );
};