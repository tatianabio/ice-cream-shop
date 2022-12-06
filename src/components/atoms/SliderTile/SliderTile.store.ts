import create from 'zustand';
import { iceCreamThemes, IIceCreamTheme } from '../../../mock/data/iceCreamThemes';

export interface IStore {
  active: number;
  setActive: (num: number) => void;
  setThemes: (themes: IIceCreamTheme[]) => void;
  /** The array including the list of ice cream themes */
  themes: IIceCreamTheme[];
}

export const useSliderTileStore = create<IStore>((set) => ({
  active: 0,
  setActive: (num: number) => set(() => ({ active: num })),
  themes: iceCreamThemes,
  setThemes: (themes: IIceCreamTheme[]) => set(() => ({ themes })),
}));
