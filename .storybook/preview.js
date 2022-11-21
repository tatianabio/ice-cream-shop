import '../src/styles/index.scss';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import i18n from './i18next.js';

// Initialize MSW
initialize();

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

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
