import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

WebFont.load({
  google: {
    families: ['Roboto:400,500,700']
  }
});


ReactDOM.render(<I18nextProvider i18n={i18next}><App /></I18nextProvider>,document.getElementById('root'));