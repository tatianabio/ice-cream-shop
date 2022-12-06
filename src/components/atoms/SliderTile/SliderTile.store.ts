import create from 'zustand';
import { iceCreamThemes, IIceCreamTheme } from '../../../mock/data/iceCreamThemes';

export interface ISliderTileStore {
  /** The number of active theme */
  activeItemIndex: number;
  /** Change the number of active theme */
  setActiveItemIndex: (num: number) => void;
  /** The array including the list of ice cream themes */
  themes: IIceCreamTheme[];
  /** Change the list of ice cream themes */
  setThemes: (themes: IIceCreamTheme[]) => void;
}

export const useSliderTileStore = create<ISliderTileStore>((set) => ({
  activeItemIndex: 0,
  setActiveItemIndex: (num: number) => set(() => ({ activeItemIndex: num })),
  themes: iceCreamThemes,
  setThemes: (themes: IIceCreamTheme[]) => set(() => ({ themes })),
}));

export const activeIndexSelector = (store: ISliderTileStore) => ({
  activeItemIndex: store.activeItemIndex,
  setActiveItemIndex: store.setActiveItemIndex,
});
