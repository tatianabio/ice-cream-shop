import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../../mock/data/products';
import './ProductCard.scss';
import Cart from '../../../assets/svg/cart';
// eslint-disable-next-line import/order
import cx from 'classnames';

interface IProductCard {
  /** Data of the product: id, title, description, price, img, fat content, rating, availability, fillers */
  data: IProduct;
  /** OnClick CartButton Handler */
  addToCart: (product: IProduct) => void;
  'data-testid': string;
}

const ProductCard = ({ data, addToCart, 'data-testid': testId }: IProductCard) => {
  const { name, description, price, imgLink, isAvailable } = data;
  const { t } = useTranslation();
  const cartButtonOnClick = () => addToCart(data);

  return (
    <div className='product-card' data-testid={`${testId}-card`}>
      <div className='product-card__info-wrapper'>
        <h3 className='product-card__title' data-testid={`${testId}-title`}>
          {t(name)}
        </h3>
        <p className='product-card__description' data-testid={`${testId}-description`}>
          {t(description)}
        </p>
        <div className='product-card__price-wrapper'>
          <span className='product-card__price' data-testid={`${testId}-price`}>{`${price} $/kg`}</span>
          <button
            className='product-card__cart-button'
            type='button'
            onClick={cartButtonOnClick}
            disabled={!isAvailable}
            data-testid={`${testId}-cart-button`}
          >
            <Cart />
            <span className='visually-hidden'>{t('addToCart')}</span>
          </button>
        </div>
      </div>
      <img
        className={cx('product-card__img', !isAvailable && 'product-card__img--disabled')}
        src={imgLink}
        alt={`${t('iceCreamScoop')} ${t(name)}`}
        width='168px'
        height='168px'
        data-testid={`${testId}-img`}
      />
      {!isAvailable && (
        <span className='product-card__availability-info' data-testid={`${testId}-availability-info`}>
          {t('notAvailable').toLowerCase()}
        </span>
      )}
    </div>
  );
};

export default ProductCard;
