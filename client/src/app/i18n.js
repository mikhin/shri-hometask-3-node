import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import ru from './translation/ru/ru.json';
import en from './translation/en/en.json';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    resources,
    react: {
      useSuspense: false,
    },
  });


export default i18n;
