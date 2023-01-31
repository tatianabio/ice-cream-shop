import React from 'react';
import { shallow } from 'zustand/shallow';
import { render, screen } from '@testing-library/react';
import cartStore, { ICartStore } from './Cart.store';
import { IProduct, products } from '../../../mock/data/products';
import GlobalMessage, { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import Button from '../../atoms/Button';
import CartTile from './CartTile';

describe('Cart Tile tests', () => {
  const TestComponent = () => {
    const addProductToCart = cartStore((store: ICartStore) => store.addProduct, shallow);

    const onClickHandler = (product: IProduct) => {
      addProductToCart(product);
      sendMessageToDisplay('successfulAddingToCart');
    };

    return (
      <>
        <GlobalMessage data-testid='demo' />
        <Button
          data-testid='raspberry'
          text='Add Raspberry ice cream, 1kg'
          variant='secondary'
          onClick={() => onClickHandler(products[0])}
        />
        <Button
          data-testid='bubblegum'
          text='Add Bubblegum ice cream, 1kg'
          variant='secondary'
          onClick={() => onClickHandler(products[1])}
        />
        <CartTile data-testid='demo' />
      </>
    );
  };

  it('Cart Tile render', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-cart')).toBeInTheDocument();
  });
});
