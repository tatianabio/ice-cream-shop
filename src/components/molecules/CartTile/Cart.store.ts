import { create } from 'zustand';
import { IProduct } from '../../../mock/data/products';

interface IInCartProduct {
  count: number;
  productInfo: IProduct;
  time: number;
}

export interface ICartStore {
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
      productList[product.id] = { count: 1, productInfo: product, time: new Date().getTime() };
    }

    set(() => ({ productList: JSON.parse(JSON.stringify(productList)) }));
  },
  deleteProduct: (productId) => {
    const productList = { ...get().productList };
    delete productList[productId];
    set(() => ({ productList: { ...productList } }));
  },
  removeAllProducts: () => {
    set(() => ({ productList: {} }));
  },
}));

export default cartStore;
