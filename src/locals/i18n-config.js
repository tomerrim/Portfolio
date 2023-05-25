import { initReactI18next } from "react-i18next";
import homeEN from "@/locals/en/home.json";
import homeIL from "@/locals/il/home.json";
import i18next from "i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            home: homeEN,
        },
        il: {
            home: homeIL,
        },
    },
    fallbackLng: "en",
});