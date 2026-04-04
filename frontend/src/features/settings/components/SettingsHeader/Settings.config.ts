export const SETTINGS_ROUTES = [
    {
        path: "profile",
        labelKey: "settings.profile.title",
        descriptionKey: "settings.profile.description"
    },
    {
        path: "preferences",
        labelKey: "settings.preferences.title",
        descriptionKey: "settings.preferences.description"
    }
] as const;

export function getCurrentSettingsRoute(pathname: string) {
    return SETTINGS_ROUTES.find(route =>
        pathname.includes(route.path)
    );
};