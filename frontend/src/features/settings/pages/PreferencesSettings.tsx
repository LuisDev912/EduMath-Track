import { useTranslation } from "react-i18next";
import SettingsItem from "../components/SettingsItem/SettingsItem.tsx";

export default function PreferencesSettings() {
    const { t, i18n } = useTranslation();
    
    return (
        <div>
            {/* show every option in their own language to improve global accessibility */}
            <SettingsItem
                title={t("settings.preferences.changeLanguage")}
                actionType="select"
                value={i18n.language}
                options={[
                    { value: "en", label: t("English") },
                    { value: "es", label: t("Español") }
                ]}

                action={(value) => {
                    if (!value) return;

                    i18n.changeLanguage(value);
                    localStorage.setItem("language", value);
                }}
            />
        </div>
    );
};