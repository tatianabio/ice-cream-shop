import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './BlogArticleTile.stories';

describe('BlogArticleTile Tests', () => {
  beforeEach(() => render(<Demo />));

  it('BlogArticleTile render', () => {
    expect(screen.getByTestId('fruit-sorbets-link')).toBeInTheDocument();
    expect(screen.getByTestId('fruit-sorbets-title')).toHaveTextContent('serveFruitSorbets');
  });

  it('BlogArticleTile Focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('fruit-sorbets-link')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('fruit-sorbets-link')).not.toHaveFocus();
  });
});
