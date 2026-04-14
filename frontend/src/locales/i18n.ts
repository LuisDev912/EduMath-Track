import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import JSON files
import en from "./en/en.json";
import es from "./es/es.json";

// Gets the browser's language and the stored language
const savedLang = localStorage.getItem('language');
const browserLang = navigator.language.split('-')[0];

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

        lng: savedLang || browserLang,

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