import { createI18n } from "vue-i18n";
import en from "./assets/en";
import jp from "./assets/jp";

let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, "$1");

const messages = {
  en: en,
  jp: jp,
};


const isDefault =
  locale != "en" && locale != "jp";

const i18n = createI18n({
  legacy: false,
  locale: isDefault ? "en" : locale,
  messages: messages,
});

export default i18n;
