import create from 'zustand';
import { IProduct } from '../../../mock/data/products';

interface IInCartProduct {
  count: number;
  productInfo: IProduct;
}

export interface ICartStore {
  productList: Record<string, IInCartProduct>;
  addProduct: (product: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
  removeAllProducts: () => void;
}

const cartStore = create<ICartStore>((set, get) => ({
  productList: {},
  addProduct: (product: IProduct) => {
    set(() => {
      const productList = { ...get().productList };

      if (productList[product.id]) {
        productList[product.id].count += 1;
      } else {
        productList[product.id] = { count: 1, productInfo: product };
      }

      return { productList: { ...productList } };
    });
  },
  deleteProduct: (product: IProduct) => {
    const { productList } = get();
    delete productList[product.id];
    set(() => ({ productList }));
  },
  removeAllProducts: () => {
    set(() => ({ productList: {} }));
  },
}));

export default cartStore;

export const addProductToCart = (product: IProduct) => {
  cartStore.getState().addProduct(product);
};
