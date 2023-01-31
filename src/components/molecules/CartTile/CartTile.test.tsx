import React from 'react';
import { shallow } from 'zustand/shallow';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import cartStore, { ICartStore } from './Cart.store';
import { IProduct, products } from '../../../mock/data/products';
import GlobalMessage, { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import Button from '../../atoms/Button';
import CartTile from './CartTile';
import mswServer from '../../../mock/mswServer/mswServer';
import {
  postRequestWithoutDelayError,
  postRequestWithoutDelaySuccess,
} from '../../../mock/mswHandlers/postRequest/postRequest';

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

  it('Cart Tile render', async () => {
    render(<TestComponent />);
    mswServer.use(postRequestWithoutDelaySuccess);
    expect(screen.getByTestId('demo-cart')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('bubblegum-button'));
    expect(screen.getByTestId('demo-1-product')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('demo-1-delete-button'));
    expect(screen.queryByTestId('demo-1-product')).not.toBeInTheDocument();
    await userEvent.click(screen.getByTestId('bubblegum-button'));
    await userEvent.click(screen.getByTestId('raspberry-button'));
    await userEvent.click(screen.getByTestId('raspberry-button'));
    await userEvent.click(screen.getByTestId('demo-cart-submit-button'));
    await waitForElementToBeRemoved(screen.queryByTestId('demo-cart-container'));
  });

  it('Order sending error', async () => {
    render(<TestComponent />);
    mswServer.use(postRequestWithoutDelayError);
    await userEvent.click(screen.getByTestId('bubblegum-button'));
    await userEvent.click(screen.getByTestId('demo-cart-submit-button'));
    expect(screen.getByTestId('demo-cart-container')).toBeInTheDocument();
    await waitFor(
      () => expect(screen.getAllByTestId('demo-global-message')[1]).toHaveClass('global-message__item--error')
      // eslint-disable-next-line function-paren-newline
    );
  });
});
