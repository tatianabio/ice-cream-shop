import { create } from 'zustand';
import axios from 'axios';
import { IProduct } from '../../../mock/data/products';

type ISelectedOrder = 'popularity' | 'cheap' | 'expensive';
type ISelectedFatContent = '0' | 'under-10' | 'under-30' | 'above-30';

export interface ICatalogFilterStore {
  allProductsList: IProduct[];
  filteredProductList: IProduct[];
  filterSettings: {
    selectedOrder: ISelectedOrder;
    selectedPriceRange: number[];
    selectedFatContent: ISelectedFatContent;
    selectedFillers: string[];
  };
  setFilteredProductList: (products?: IProduct[]) => void;
  setSortingOrder: (selectedOption: string) => void;
  setPriceRange: (priceRange: number[]) => void;
  setFatContent: (selectedFatContent: string) => void;
  setFillers: (selectedFillers: string[]) => void;
  loadProducts: () => void;
}

const useCatalogFilterStore = create<ICatalogFilterStore>((set, get) => ({
  allProductsList: [],
  filteredProductList: [],
  filterSettings: {
    selectedOrder: 'popularity',
    selectedPriceRange: [3, 10],
    selectedFatContent: 'under-30',
    selectedFillers: ['fruit'],
  },
  setFilteredProductList: (products?: IProduct[]) => {
    const { selectedOrder, selectedPriceRange, selectedFillers, selectedFatContent } = get().filterSettings;
    const currentProducts = products || get().allProductsList;
    const filtered = currentProducts.filter((product) => {
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

        default:
          return b.price - a.price; // expensive
      }
    });

    set(() => ({ filteredProductList: sorted }));
  },
  setSortingOrder: (selectedOption) => {
    set((store: ICatalogFilterStore) => ({
      filterSettings: { ...store.filterSettings, selectedOrder: selectedOption as ISelectedOrder },
    }));
  },
  setPriceRange: (priceRange) => {
    set((store: ICatalogFilterStore) => ({
      filterSettings: { ...store.filterSettings, selectedPriceRange: priceRange },
    }));
  },
  setFatContent: (selectedFatContent) => {
    set((store: ICatalogFilterStore) => ({
      filterSettings: { ...store.filterSettings, selectedFatContent: selectedFatContent as ISelectedFatContent },
    }));
  },
  setFillers: (selectedFillers) => {
    set((store: ICatalogFilterStore) => ({
      filterSettings: { ...store.filterSettings, selectedFillers },
    }));
  },
  loadProducts: async () => {
    const response = await axios.get<IProduct[]>('https://my-server.com/products');
    get().setFilteredProductList(response.data);
    set(() => ({ allProductsList: response.data }));
  },
}));

export default useCatalogFilterStore;
