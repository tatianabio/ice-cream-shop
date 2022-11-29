import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Demo } from './ButtonLink.stories';

describe('Button Links Tests', () => {
  beforeEach(() => render(<Demo />));

  it.each(['primary', 'secondary', 'thirdly'])('ButtonLinks render', (variant: string) => {
    expect(screen.getByTestId(`${variant}-button-link`)).toHaveTextContent('order');
    expect(screen.getByTestId(`${variant}-button-link`)).toHaveAttribute('href');
  });

  it('Button Links Focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('primary-button-link')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('secondary-button-link')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('thirdly-button-link')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('thirdly-button-link')).not.toHaveFocus();
  });
});
