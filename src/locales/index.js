import I18n from "i18n-js";

import en from "./en-US";
import pt from "./pt-BR";

const getLanguageByDevice = () => {
  const lang = navigator.language;
  switch (lang) {
    case "en_US":
      return "en_US";
    case "en-US":
      return "en_US";
    case "pt_BR":
      return "pt_BR";
    case "en":
      return "en_US";
    case "pt_US":
      return "pt_BR";
    default:
      return "en_US";
  }
};

I18n.translations = {
  en_US: en,
  pt_BR: pt
};

const setLanguageToI18n = () => {
  const translateNormalize = getLanguageByDevice();
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize
  );
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = "en_US");
};

setLanguageToI18n();

export const translate = key => I18n.t(key);
