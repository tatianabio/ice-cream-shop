import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Demo } from './OfferTile.stories';

describe('Offer Tile Tests', () => {
  const onClick = jest.fn();
  beforeEach(() => render(<Demo onClickTest={onClick} />));

  it('Offer Tile render', () => {
    expect(screen.getByTestId('themes-offer-block-0')).toBeInTheDocument();
  });

  it('Order button focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('themes-offer-block-button-0')).toHaveFocus();
    userEvent.keyboard('{Enter}');
    expect(onClick).toBeCalledTimes(1);
    await userEvent.tab();
    expect(screen.getByTestId('themes-offer-block-button-0')).not.toHaveFocus();
  });

  it('Order button action', async () => {
    await userEvent.click(screen.getByTestId('themes-offer-block-button-0'));
    expect(onClick).toBeCalledTimes(1);
    await userEvent.click(screen.getByTestId('themes-offer-block-button-0'));
    expect(onClick).toBeCalledTimes(2);
  });
});
