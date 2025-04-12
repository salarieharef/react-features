import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale from './locale'


// npm install react-i18next i18next --save


const resources = {
  en: {
    translatio : locale.en
  },
  fa: {
    translation: locale.fa
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;