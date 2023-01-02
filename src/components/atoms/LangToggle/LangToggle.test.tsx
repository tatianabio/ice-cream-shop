import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useTranslation } from 'react-i18next';
import LangToggle from './LangToggle';

describe('Lang Toggle Tests', () => {
  it('render en', async () => {
    render(<LangToggle data-testid='demo' />);
    expect(localStorage.getItem('lang')).toEqual('fr');

    const myLangToggle = screen.getByTestId('demo-language-toggle');
    expect(myLangToggle).toHaveClass('language-toggle--en');
    await userEvent.click(myLangToggle);
    expect(localStorage.getItem('lang')).toEqual('en');
  });

  it('render french', async () => {
    (useTranslation as jest.Mock).mockReturnValue({
      t: (str: string) => str,
      i18n: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        changeLanguage: () => new Promise(() => {}),
        language: 'en',
      },
    });
    render(<LangToggle data-testid='demo' />);
    expect(localStorage.getItem('lang')).toEqual('en');
    const myLangToggle = screen.getByTestId('demo-language-toggle');
    expect(myLangToggle).toHaveClass('language-toggle--fr');
    await userEvent.click(myLangToggle);
    expect(localStorage.getItem('lang')).toEqual('fr');
  });
});
