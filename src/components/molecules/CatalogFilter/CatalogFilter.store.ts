import { create } from 'zustand';
import { IProduct, products } from '../../../mock/data/products';

export interface ICatalogFilterStore {
  allProductsList: IProduct[];
  filteredProductList: IProduct[];
  filterSettings: {
    selectedOrder: 'popularity' | 'cheap' | 'expensive';
    selectedPriceRange: number[];
    selectedFatContent: '0' | 'under-10' | 'under-30' | 'above-30';
    selectedFillers: string[];
  };
  setFilteredProductList: () => void;
  // setSortingOrder: (selectedOption: string) => void;
}

const useCatalogFilterStore = create<ICatalogFilterStore>((set, get) => ({
  allProductsList: products,
  filteredProductList: products,
  filterSettings: {
    selectedOrder: 'expensive',
    selectedPriceRange: [3, 10],
    selectedFatContent: 'under-30',
    selectedFillers: [],
  },
  setFilteredProductList: () => {
    const { selectedOrder, selectedPriceRange, selectedFillers, selectedFatContent } = get().filterSettings;
    const filtered = get().allProductsList.filter((product) => {
      const { price, fillers, fatContent } = product;

      let isSuitable = true;

      // Filtration for fat content
      selectedFatContent === '0' && fatContent !== 0 && (isSuitable = false);
      isSuitable && selectedFatContent === 'under-10' && fatContent > 10 && (isSuitable = false);
      isSuitable && selectedFatContent === 'under-30' && fatContent > 30 && (isSuitable = false);
      isSuitable && selectedFatContent === 'above-30' && fatContent < 30 && (isSuitable = false);

      // Filtration for price
      isSuitable && price < selectedPriceRange[0] && (isSuitable = false);
      isSuitable && price > selectedPriceRange[1] && (isSuitable = false);

      // Filtration for fillers
      if (isSuitable && selectedFillers.length !== 0) {
        for (const selectedFiller of selectedFillers) {
          if (!fillers?.find((item) => item.name === selectedFiller)) {
            isSuitable = false;
            break;
          }
        }
      }

      return isSuitable;
    });

    const sorted = filtered.sort((a, b) => {
      switch (selectedOrder) {
        case 'popularity':
          return b.rating - a.rating;
        case 'cheap':
          return a.price - b.price;
        case 'expensive':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    set(() => ({ filteredProductList: sorted }));
  },
  // setSortingOrder: (selectedOption) => {
  //   set(() => ({filterSettings }));
  // },
}));

export default useCatalogFilterStore;
