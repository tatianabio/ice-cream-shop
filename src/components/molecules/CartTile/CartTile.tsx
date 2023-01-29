import React from 'react';
import shallow from 'zustand/shallow';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import cartStore, { ICartStore } from './Cart.store';

interface ICartTile {
  /** Callback for closing modal/popper after successful sending data */
  onClose?: () => void;
  /** Technical attributes */
  'data-testid': string;
}

const CartTile = ({ 'data-testid': testId, onClose }: ICartTile) => {
  const { t } = useTranslation();

  const productList = cartStore((store: ICartStore) => store.productList, shallow);
  const [addProductToCart, removeProductFromCart, removeAllProductsFromCart] = cartStore(
    (store: ICartStore) => [store.addProduct, store.deleteProduct, store.removeAllProducts],
    shallow
  );

  const isCartEmpty: boolean = Object.keys(productList).length === 0;

  return (
    <section className='cart'>
      <h2 className={cx('cart__title', isCartEmpty && 'cart__title--empty')}>
        {isCartEmpty ? t('Your cart is empty') : t('Cart')}
      </h2>
    </section>
  );
};

export default CartTile;
