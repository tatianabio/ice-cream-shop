import '../src/styles/index.scss';

import i18n from './i18next.js';

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    fr: 'Français',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
