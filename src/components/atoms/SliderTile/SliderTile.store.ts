import create from 'zustand';
import { iceCreamOffers, IIceCreamOffer } from '../../../mock/data/iceCreamOffers';

export interface ISliderTileStore {
  /** The number of active theme */
  activeItemIndex: number;
  /** Change the number of active theme */
  setActiveItemIndex: (num: number) => void;
  /** The array including the list of ice cream themes */
  themes: IIceCreamOffer[];
  /** Change the list of ice cream themes */
  setThemes: (themes: IIceCreamOffer[]) => void;
}

export const useSliderTileStore = create<ISliderTileStore>((set) => ({
  activeItemIndex: 0,
  setActiveItemIndex: (num: number) => set(() => ({ activeItemIndex: num })),
  themes: iceCreamOffers,
  setThemes: (themes: IIceCreamOffer[]) => set(() => ({ themes })),
}));

export const activeIndexSelector = (store: ISliderTileStore) => ({
  activeItemIndex: store.activeItemIndex,
  setActiveItemIndex: store.setActiveItemIndex,
});
