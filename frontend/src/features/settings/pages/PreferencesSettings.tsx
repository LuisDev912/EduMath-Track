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

            <SettingsItem
                title={t("settings.preferences.timer.title")}
                description={t("settings.preferences.timer.description")}
                actionType="select"
                value={localStorage.getItem("gameTimerEnabled") === "true" ? "true" : "false"}
                options={[
                    { value: "true", label: t("settings.preferences.timer.enable") },
                    { value: "false", label: t("settings.preferences.timer.disable") }
                ]}
                action={(value) => {
                    if (!value) return;
                    localStorage.setItem("gameTimerEnabled", value);
                }}
            />

            <SettingsItem
                title={t("settings.preferences.changeDifficulty.title")}
                description={t("settings.preferences.changeDifficulty.description")}
                actionType="select"
                value={localStorage.getItem("changeGameDifficulty") || "medium"}
                options={[
                    { value: "enable", label: t("settings.preferences.changeDifficulty.enable") },
                    { value: "disable", label: t("settings.preferences.changeDifficulty.disable") },
                ]}
                action={(value) => {
                    if (!value) return;
                    localStorage.setItem("changeGameDifficulty", value);
                }}
            />
        </div>
    );
};