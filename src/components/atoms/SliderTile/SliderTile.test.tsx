import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'zustand/shallow';
import { useEffect } from 'react';
import { iceCreamOffers, IIceCreamOffer } from '../../../mock/data/iceCreamOffers';
import SliderTile from './SliderTile';
import { ISliderTileStore, useSliderTileStore } from './SliderTile.store';
import { fillers } from '../../../mock/data/products';

const extraTestTheme: IIceCreamOffer = {
  id: 3,
  title: 'bananaCornTitle',
  description: 'bananaCornDescription',
  imgLink: '/corn-banana',
  backgroundColor: 'var(--special-blue)',
  productInfo: {
    id: 5,
    name: 'banana',
    description: 'bananaDescription',
    price: 6.0,
    fatContent: 10,
    rating: 75,
    imgLink: '/banana',
    fillers: [fillers[2]],
    isAvailable: true,
  },
};

const iceCreamThemesTest: IIceCreamOffer[] = [...iceCreamOffers, extraTestTheme];

const TestComponent = () => {
  const setOffers = useSliderTileStore((store: ISliderTileStore) => store.setOffers, shallow);
  useEffect(() => {
    setOffers(iceCreamThemesTest);
  }, []);
  return <SliderTile data-testid='test' />;
};

describe('SliderTile Tests', () => {
  beforeEach(() => render(<TestComponent />));

  const lastItemIndex = iceCreamThemesTest.length - 1;

  it('SliderTile render', () => {
    expect(screen.getByTestId('test-list')).toBeInTheDocument();
    expect(screen.getByTestId('test-item-0')).toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId('test-item-1')).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`test-item-${lastItemIndex}`)).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`test-item-${lastItemIndex}`)).toHaveClass('ice-cream-item--hidden');
  });

  it('SliderTile: buttons focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('test-previous-button-0')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('test-next-button-0')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('test-next-button-0')).not.toHaveFocus();
  });

  it('SliderTile: click on previous and next buttons', async () => {
    await userEvent.click(screen.getByTestId('test-previous-button-0'));
    expect(screen.getByTestId('test-item-0')).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`test-item-${lastItemIndex}`)).toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`test-item-${lastItemIndex - 1}`)).toHaveClass('ice-cream-item--hidden');

    await userEvent.click(screen.getByTestId(`test-next-button-${lastItemIndex}`));
    expect(screen.getByTestId(`test-item-${lastItemIndex}`)).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId('test-item-0')).toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`test-item-${lastItemIndex - 1}`)).not.toHaveClass('ice-cream-item--hidden');
    expect(screen.getByTestId(`test-item-${lastItemIndex}`)).toHaveClass('ice-cream-item--hidden');

    await userEvent.click(screen.getByTestId('test-next-button-0'));
    expect(screen.getByTestId('test-item-0')).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId('test-item-1')).toHaveClass('ice-cream-item--active');
  });
});
