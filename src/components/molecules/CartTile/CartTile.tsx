import React from 'react';
import shallow from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import cartStore, { ICartStore } from './Cart.store';

interface ICartTile {
  /** Callback for closing modal/popper after successful sending data */
  onClose?: () => void;
  /** Technical attributes */
  'data-testid': string;
}

const CartTile = () => {
  const { t } = useTranslation();

  const productList = cartStore((store: ICartStore) => store.productList, shallow);
  const [addProductToCart, removeProductFromCart, removeAllProductsFromCart] = cartStore(
    (store: ICartStore) => [store.addProduct, store.deleteProduct, store.removeAllProducts],
    shallow
  );

  return (
    <section>
      <h2>{Object.keys(productList).length === 0 ? t('Cart') : t('Cart')}</h2>
    </section>
  );
};

export default CartTile;
