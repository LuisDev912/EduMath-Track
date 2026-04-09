import SettingsItem from "../components/SettingsItem/SettingsItem.tsx";

export default function ProfileSettings() {
    return (
        <SettingsItem
            title="Example Setting"
            description="This is an example setting item."
            actionType="button"
            action={() => alert("Action triggered!")}
        />
    );
};