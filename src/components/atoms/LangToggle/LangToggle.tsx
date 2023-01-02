import React, { HTMLProps, useEffect } from 'react';
import './LangToggle.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

interface ILangToggle extends HTMLProps<HTMLButtonElement> {
  /** Technical attributes */
  'data-testid': string;
  className?: string;
}

const LangToggle = ({ 'data-testid': testId, className }: ILangToggle) => {
  const { i18n } = useTranslation();
  // const getLanguage = () => i18n.language;
  const currentLanguage = i18n.language;

  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    !localLang && localStorage.setItem('lang', currentLanguage);
    localLang && i18n.changeLanguage(localLang);
  }, []);

  const onLangButtonHandler = async () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    localStorage.setItem('lang', newLanguage);
    await i18n.changeLanguage(newLanguage);
  };

  const toggleLangButtonText =
    currentLanguage === 'en'
      ? "Switch the language of the page from English to French. Changer la langue de la page de l'anglais au français."
      : "Switch the language of the page from French to English. Changer la langue de la page du français à l'anglais.";

  return (
    <button
      className={cx(
        'language-toggle',
        currentLanguage === 'en' && 'language-toggle--fr',
        currentLanguage === 'fr' && 'language-toggle--en',
        className
      )}
      type='button'
      onClick={onLangButtonHandler}
      data-testid={`${testId}-language-toggle`}
    >
      <span className='visually-hidden'>{toggleLangButtonText}</span>
    </button>
  );
};

export default LangToggle;
