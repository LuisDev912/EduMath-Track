import SettingsItem from "../components/SettingsItem/SettingsItem";

export default function SettingsPage() {
    return (
        <SettingsItem
            title="Example Setting"
            description="This is an example setting item."
            actionType="button"
            action={() => alert("Action triggered!")}
        />
    )
};