import { create } from 'zustand';
import { iceCreamOffers, IIceCreamOffer } from '../../../mock/data/iceCreamOffers';

export interface ISliderTileStore {
  /** The number of active offer */
  activeItemIndex: number;
  /** Change the number of active offer */
  setActiveItemIndex: (num: number) => void;
  /** The array including the list of ice cream offers */
  offers: IIceCreamOffer[];
  /** Change the list of ice cream offers */
  setOffers: (offers: IIceCreamOffer[]) => void;
}

// TODO: move this store to the component OfferSection

export const useSliderTileStore = create<ISliderTileStore>((set) => ({
  activeItemIndex: +(localStorage.getItem('theme') || 0),
  setActiveItemIndex: (num: number) =>
    set(() => {
      localStorage.setItem('theme', `${num}`);
      return { activeItemIndex: num };
    }),
  offers: iceCreamOffers,
  setOffers: (offers: IIceCreamOffer[]) => set(() => ({ offers })),
}));

export const activeIndexSelector = (store: ISliderTileStore) => ({
  activeItemIndex: store.activeItemIndex,
  setActiveItemIndex: store.setActiveItemIndex,
});
