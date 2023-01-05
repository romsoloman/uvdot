import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { he } from "./public/locales/he/index.ts";

i18n.use(initReactI18next).init({
  resources: {
    he,
  },
  fallbackLng: "he",
  lng: "he",
  defaultNS: ["common"],
  fallbackNS: ["common"],
  interpolation: {
    escapeValue: false,
  },
  // debug only when not in production
  debug: false,
});

export default i18n;
