import SettingsItem from "../components/SettingsItem/SettingsItem.tsx";

export default function PreferencesSettings() {
    return (
        <SettingsItem
            title="Example Setting"
            description="This is an example setting item."
            actionType="button"
            action={() => alert("Action triggered!")}
        />
    );
};