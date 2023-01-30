import React from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { shallow } from 'zustand/shallow';
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
  const [removeProductFromCart, removeAllProductsFromCart] = cartStore(
    (store: ICartStore) => [store.deleteProduct, store.removeAllProducts],
    shallow
  );
  const isCartEmpty: boolean = Object.keys(productList).length === 0;

  const displayedProductList = Object.keys(productList).map((key) => {
    const { productInfo, count } = productList[key];
    const { name, price, imgLink } = productInfo;

    return (
      <li key={key}>
        <img src={imgLink} alt={`${t('iceCreamScoop')} ${t(name)}`} width='46px' height='46px' />
        <h3>{t(name)}</h3>
        <span>{t(`${count} kg x ${price}$`)}</span>
        <span>{t(`${(price * count).toFixed(2)} $`)}</span>
        <button type='button' onClick={() => removeProductFromCart(productInfo)}>
          Delete product
        </button>
      </li>
    );
  });

  return (
    <section className='cart' data-testid={`${testId}-cart`}>
      <h2 className={cx('cart__title', isCartEmpty && 'cart__title--empty')}>
        {isCartEmpty ? t('Your cart is empty') : t('Cart')}
      </h2>
      {!isCartEmpty && (
        <div className='cart__container'>
          <ul>{displayedProductList}</ul>
        </div>
      )}
    </section>
  );
};

export default CartTile;
