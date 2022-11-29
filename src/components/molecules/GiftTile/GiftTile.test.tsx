import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './GiftTile.stories';
import { gifts } from '../../../mock/data/gifts';

describe('Gift Tiles Tests', () => {
  beforeEach(() => render(<Demo />));

  it('Gifts Tile render', () => {
    expect(screen.getByTestId('raspberry-gift-title')).toHaveTextContent(gifts[0].name);
    expect(screen.getByTestId('marshmallow-gift-title')).toHaveTextContent(gifts[1].name);
    expect(screen.getByTestId('raspberry-gift-description')).toHaveTextContent(gifts[0].description);
    expect(screen.getByTestId('marshmallow-gift-description')).toHaveTextContent(gifts[1].description);
    expect(screen.getByTestId('raspberry-gift-img')).toBeInTheDocument();
    expect(screen.getByTestId('marshmallow-gift-img')).toBeInTheDocument();
  });

  it('Button-links focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('raspberry-gift-button')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('marshmallow-gift-button')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('marshmallow-gift-button')).not.toHaveFocus();
  });
});
