import React, { HTMLProps } from 'react';
import './LangToggle.scss';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';

interface ILangToggle extends HTMLProps<HTMLButtonElement> {
  /** Technical attributes */
  'data-testid': string;
  className?: string;
}

const LangToggle = ({ 'data-testid': testId, className }: ILangToggle) => {
  const { t, i18n } = useTranslation();
  const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
  const currentLanguage = getLanguage();

  const onLangButtonHandler = () => {
    const switchLanguageTo = (lang: string) => i18n.changeLanguage(lang).then();
    currentLanguage === 'en' ? switchLanguageTo('fr') : switchLanguageTo('en');
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
