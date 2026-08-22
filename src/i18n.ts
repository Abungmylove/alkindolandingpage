import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "@/locales/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    id: { translation: translations.id },
    en: { translation: translations.en },
  },
  lng: "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
