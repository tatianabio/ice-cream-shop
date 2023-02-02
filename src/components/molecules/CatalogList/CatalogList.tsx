import React from 'react';
import { shallow } from 'zustand/shallow';
import { IProduct } from '../../../mock/data/products';
import ProductCard from '../../atoms/ProductCard';
import cartStore, { ICartStore } from '../CartTile/Cart.store';
import { sendMessageToDisplay } from '../../atoms/GlobalMessage';

interface ICatalogList {
  /** The list of products (incl. after  if applicable) */
  productsList: IProduct[];
  /** The number of products displayed on the screen */
  displayedProductsNumber: number;
  /** Technical attributes */
  'data-testid': string;
}

const CatalogList = ({ 'data-testid': testId, productsList, displayedProductsNumber }: ICatalogList) => {
  const addProductToCart = cartStore((store: ICartStore) => store.addProduct, shallow);

  const onClickHandler = (product: IProduct) => {
    addProductToCart(product);
    sendMessageToDisplay('successfulAddingToCart');
  };

  const displayedProductsList = productsList.slice(0, displayedProductsNumber).map((product) => {
    const { id } = product;

    return (
      <li key={id} className='catalog-item'>
        <ProductCard addToCart={() => onClickHandler(product)} data={product} data-testid={testId} />
      </li>
    );
  });

  return (
    <ul className='catalog-list' data-testid={`${testId}-catalog-list`}>
      {displayedProductsList}
    </ul>
  );
};

export default CatalogList;
