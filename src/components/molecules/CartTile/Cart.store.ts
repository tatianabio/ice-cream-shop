import create from 'zustand';
import { IProduct } from '../../../mock/data/products';

interface IInCartProduct {
  count: number;
  productInfo: IProduct;
}

interface ICartStore {
  productList: Record<string, IInCartProduct>;
  addProduct: (product: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
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

    set(() => ({ productList }));
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

export const removeProductFromCart = (product: IProduct) => {
  cartStore.getState().deleteProduct(product);
};

export const removeAllProductsFromCart = () => {
  cartStore.getState().removeAllProducts();
};
