import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/global.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WebFont from 'webfontloader';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import 'react-toastify/dist/ReactToastify.css';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import { Helmet } from 'react-helmet';

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


ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Helmet>
      <meta name="author" content="Woombat Consulting Group" />
      <meta name="copyright" content="Woombat Consulting Group" />
      <meta name="keywords" content="Analitica de Datos, Inteligencia Artificial, Big Data, Consultoria, Desarrollo de Software" />
      <meta name="description" content="Empresa Colombiana, que presta los servicios de analitica de datos, big data, consultoria y desarrollo de software"/>
    </Helmet>
    <App />
  </I18nextProvider>
  ,document.getElementById('root'));