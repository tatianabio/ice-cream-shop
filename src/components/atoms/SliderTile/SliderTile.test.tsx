import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import shallow from 'zustand/shallow';
import { useEffect } from 'react';
import { iceCreamThemes, IIceCreamTheme } from '../../../mock/data/iceCreamThemes';
import SliderTile from './SliderTile';
import { ISliderTileStore, useSliderTileStore } from './SliderTile.store';

const extraTestTheme: IIceCreamTheme = {
  id: 3,
  title: 'bananaCornTitle',
  description: 'bananaCornDescription',
  imgLink: '/corn-banana',
  backgroundColor: 'var(--special-blue)',
};

const iceCreamThemesTest: IIceCreamTheme[] = [...iceCreamThemes, extraTestTheme];

const TestComponent = () => {
  const setThemes = useSliderTileStore((store: ISliderTileStore) => store.setThemes, shallow);
  useEffect(() => {
    setThemes(iceCreamThemesTest);
  }, []);
  return <SliderTile data-testid='themes' />;
};

describe('SliderTile Tests', () => {
  beforeEach(() => render(<TestComponent />));

  const lastItemIndex = iceCreamThemesTest.length - 1;

  it('SliderTile render', () => {
    expect(screen.getByTestId('themes-list')).toBeInTheDocument();
    expect(screen.getByTestId('themes-item-0')).toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId('themes-item-1')).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`themes-item-${lastItemIndex}`)).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`themes-item-${lastItemIndex}`)).toHaveClass('ice-cream-item--hidden');
  });

  it('SliderTile: buttons focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('themes-previous-button-0')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('themes-next-button-0')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByTestId('themes-next-button-0')).not.toHaveFocus();
  });

  it('SliderTile: click on previous and next buttons', async () => {
    await userEvent.click(screen.getByTestId('themes-previous-button-0'));
    expect(screen.getByTestId('themes-item-0')).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`themes-item-${lastItemIndex}`)).toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`themes-item-${lastItemIndex - 1}`)).toHaveClass('ice-cream-item--hidden');

    await userEvent.click(screen.getByTestId(`themes-next-button-${lastItemIndex}`));
    expect(screen.getByTestId(`themes-item-${lastItemIndex}`)).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId('themes-item-0')).toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId(`themes-item-${lastItemIndex - 1}`)).not.toHaveClass('ice-cream-item--hidden');
    expect(screen.getByTestId(`themes-item-${lastItemIndex}`)).toHaveClass('ice-cream-item--hidden');

    await userEvent.click(screen.getByTestId('themes-next-button-0'));
    expect(screen.getByTestId('themes-item-0')).not.toHaveClass('ice-cream-item--active');
    expect(screen.getByTestId('themes-item-1')).toHaveClass('ice-cream-item--active');
  });
});
