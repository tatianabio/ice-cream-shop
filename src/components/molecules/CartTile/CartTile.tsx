import React, { useCallback, useEffect, useState } from 'react';
import './CartTile.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { shallow } from 'zustand/shallow';
import cartStore, { ICartStore, IInCartProduct } from './Cart.store';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import Cross from '../../../assets/svg/cross';
import Button from '../../atoms/Button';
import postDataRequest from '../../utils/commonFunctions';

interface ICartTile {
  /** Callback for closing modal/popper after successful sending data */
  onClose?: () => void;
  /** Technical attributes */
  'data-testid': string;
}

const CartTile = ({ 'data-testid': testId, onClose }: ICartTile) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>(undefined);

  const productList = cartStore((store: ICartStore) => store.productList, shallow);
  const [removeProductFromCart, removeAllProductsFromCart] = cartStore(
    (store: ICartStore) => [store.deleteProduct, store.removeAllProducts],
    shallow
  );

  const sendData = useCallback(async (data: unknown, linkName: string) => {
    setLoading(true);
    setIsSuccessful(undefined);

    const response = await postDataRequest(data, linkName);
    setIsSuccessful(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    !loading && isSuccessful === false && sendMessageToDisplay('errorMessage', 'error');
    if (!loading && isSuccessful === true) {
      sendMessageToDisplay('successfulOrderSending');
      removeAllProductsFromCart();
      onClose?.();
    }
  }, [loading, isSuccessful]);

  const isCartEmpty: boolean = Object.keys(productList).length === 0;

  const displayedProductList = Object.entries(productList)
    .sort(([, a], [, b]) => a.time - b.time)
    .map((item) => {
      const [key, { productInfo, count }] = item;
      const { name, price, imgLink } = productInfo;

      return (
        <li className='cart__product-item' key={key}>
          <img
            className='cart__product-img'
            src={imgLink}
            alt={`${t('iceCreamScoop')} ${t(name)}`}
            width='46px'
            height='46px'
          />
          <div className='cart__product-info'>
            <h3 className='cart__product-name'>{t(name)}</h3>
            <span className='cart__product-count'>{t(`${count} kg x ${price}$`)}</span>
          </div>
          <span className='cart__product-price'>{t(`${(price * count).toFixed(2)} $`)}</span>
          <button
            className='cart__product-removing'
            type='button'
            onClick={() => onDeleteButtonClickHandler(productInfo.id)}
          >
            <span className='visually-hidden'>Delete product</span>
            <Cross />
          </button>
        </li>
      );
    });

  const totalPrice = Object.keys(productList).reduce((sum: number, key) => {
    const { count, productInfo } = productList[key];
    const { price } = productInfo;
    return sum + count * price;
  }, 0);

  const onDeleteButtonClickHandler = (productId: number) => {
    removeProductFromCart(productId);
    sendMessageToDisplay('successfulRemovingFromCart');
  };

  const onClickHandler = async (data: Record<string, IInCartProduct>) => {
    await sendData(data, 'cart');
  };

  return (
    <section className='cart' data-testid={`${testId}-cart`}>
      <h2 className={cx('cart__title', isCartEmpty && 'cart__title--empty')}>
        {isCartEmpty ? t('emptyCart') : t('cart')}
      </h2>
      {!isCartEmpty && (
        <div className='cart__container'>
          <ul className='cart__product-list'>{displayedProductList}</ul>
          <div className='cart__submit-wrapper'>
            <Button
              data-testid={testId}
              text={t('sendOrder')}
              variant='secondary'
              loading={loading}
              onClick={() => onClickHandler(productList)}
            />
            <span className='cart__total-price'>{`${t('totalOrderPrice')}: ${totalPrice.toFixed(2)}$`}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartTile;
