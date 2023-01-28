import create from 'zustand';
import { IProduct } from '../../../mock/data/products';

interface IInCartProduct {
  count: number;
  productInfo: IProduct;
}

interface ICartStore {
  productList: Record<string, IInCartProduct>;
  addProduct: (product: IProduct) => void;
  deleteProduct: (productId: number) => void;
  removeAllProducts: () => void;
}

const cartStore = create<ICartStore>((set, get) => ({
  productList: {},
  addProduct: (product: IProduct) => {
    const { productList } = get();
    if (productList[product.id]) {
      productList[product.id].count += 1;
    } else {
      productList[product.id] = { count: 1, productInfo: product };
    }

    set(() => ({
      productList,
    }));
  },
  deleteProduct: () => {},
  removeAllProducts: () => {},
}));
