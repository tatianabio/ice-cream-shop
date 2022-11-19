import React, { useEffect } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage('en');
    }, 3000);
  }, []);

  return <h1>{t('Welcome to React')}</h1>;
}

export default App;
