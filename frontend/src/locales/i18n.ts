import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import JSON files
import en from "./en/en.json";
import es from "./es/es.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ...en
                }
            },
            es: {
                translation: {
                    ...es
                }
            },
        },

        // Starts with English
        lng: localStorage.getItem('language') || 'en',

        // Supports these languages
        supportedLngs: ["en", "es"],

        // If it fails, the language is set to English
        fallbackLng: "en",

        // Avoids problems with React
        interpolation: {
            escapeValue: false,
        },

        // Prevents console errors
        react: {
            useSuspense: false,
        },
    });

export default i18n;