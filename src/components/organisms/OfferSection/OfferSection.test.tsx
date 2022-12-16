import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { iceCreamOffers } from '../../../mock/data/iceCreamOffers';
import OfferSection from './OfferSection';
import { useSliderTileStore } from '../../atoms/SliderTile/SliderTile.store';

describe('OfferSection Tests', () => {
  const jestFn = jest.fn();

  beforeEach(() => {
    render(<OfferSection data-testid='demo' addToCart={jestFn} />);
  });

  it('Render OfferSection', () => {
    expect(screen.getByTestId('demo-offer-section')).toBeInTheDocument();
  });

  it('Switching offers and themes', async () => {
    await userEvent.click(screen.getByTestId('demo-next-button-0'));
    expect(screen.getByTestId('demo-offer-section')).toHaveClass(`special-color-${iceCreamOffers[1].backgroundColor}`);
    expect(screen.getByTestId('demo-bullet-item-1')).toHaveClass('bullet-item--active');
    expect(screen.getByTestId('demo-offer-block-1')).toBeInTheDocument();
    act(() => {
      useSliderTileStore.setState({ activeItemIndex: 0 });
    });
  });

  it('Clicking on Order button', async () => {
    await userEvent.click(await screen.findByTestId('demo-offer-block-0-button'));
    expect(jestFn).toBeCalledWith(iceCreamOffers[0]);
  });
});
