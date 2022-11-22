import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../../mock/data/products';
import './ProductCard.scss';
import Cart from '../../../assets/svg/cart';
import cx from 'classnames';

interface IProductCard {
  data: IProduct;
  addToCart: (product: IProduct) => void;
}

const ProductCard = ({ data, addToCart }: IProductCard) => {
  const { name, description, price, imgLink, isAvailable } = data;
  const { t } = useTranslation();
  const cartButtonOnClick = () => addToCart(data);

  return (
    <div className='product-card'>
      <div className='product-card__info-wrapper'>
        <h3 className='product-card__title'>{t(name)}</h3>
        <p className='product-card__description'>{t(description)}</p>
        <div className='product-card__price-wrapper'>
          <span className='product-card__price'>{`${price} $/kg`}</span>
          <button
            className='product-card__cart-button'
            type='button'
            onClick={cartButtonOnClick}
            disabled={!isAvailable}
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
      />
      {!isAvailable && <span className='product-card__availability-info'>{t('notAvailable').toLowerCase()}</span>}
    </div>
  );
};

export default ProductCard;
