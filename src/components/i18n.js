import React from "react";
import i18n from "i18next";
import backend from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector" 
import { initReactI18next } from "react-i18next";

import { createRoot } from 'react-dom/client';
import { useTranslation } from "react-i18next"
import translateEn  from '../Local/en.json';
import translateAr   from '../Local/ar.json';

i18n.use(backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
backend: { loadPath: "/locales/{{lng}}/{{ns}}.json"},
fallbackLng: 'en',
debug: false,
ns:[ 'translation', 'common','home'], 
// we do not support namespace in this example => the default namespace is used
interpolation: { 
  escapeValue: false,
  formatSeprator: ',',


}, // react already safes from xss
react:{
  wait: true
}
})


    const  resources= {
      en: {
        translation:   translateEn
      },
      ar:{
        translation:  translateAr
      }
    };
    i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({                
resources,
lng : "en",
interpolation:{
  escapeValue: false 

},
react:{
  useSuspense:false
}

    });


    // export default i18n;
    // lng: "en", 
    // fallbackLng: "en",

    // interpolation: {
    //   escapeValue: false 
    // }

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t('Welcome to React')}</h2>;
// }

// // // append app to dom
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <App />

  ;
  export default i18n;