import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../../../mock/data/products';

interface IProductCard {
  data: IProduct;
}

const ProductCard = ({ data }: IProductCard) => {
  const { name, description, price, imgLink } = data;
  const { t } = useTranslation();

  return (
    <div className='product-card'>
      <img className='product-card__img' src={imgLink} alt='Scoop of' />
      <h3 className='product-card__title'>{name}</h3>
      <p className='product-card__description'>{description}</p>
      <span className='product-card__price'>{price}</span>
      <button className='product-card__cart' />
    </div>
  );
};

export default ProductCard;
