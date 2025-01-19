import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // This allows loading translation files from a server or local files.
  .use(LanguageDetector) // Automatically detects the user's language preference.
  .use(initReactI18next) // Integrates i18next with react-i18next
  .init({
    fallbackLng: "en", // Default language if the translation for the detected language is not available.
    debug: true,
    interpolation: {
      escapeValue: false, // React handles escaping automatically.
    },
    react: {
      useSuspense: false, // Disables React Suspense for now.
    },
  });

export default i18n;
