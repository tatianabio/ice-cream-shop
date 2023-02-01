import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import userEvent from '@testing-library/user-event';
import GlobalMessage, { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import Header from './Header';
import basicNavigation from './utils';
import cartStore, { ICartStore } from '../../molecules/CartTile/Cart.store';
import { IProduct, products } from '../../../mock/data/products';
import Button from '../../atoms/Button';

describe('Header tests', () => {
  const TestComponent = () => {
    const addProductToCart = cartStore((store: ICartStore) => store.addProduct, shallow);

    const onClickHandler = (product: IProduct) => {
      addProductToCart(product);
      sendMessageToDisplay('successfulAddingToCart');
    };

    return (
      <>
        <GlobalMessage data-testid='demo' />
        <MemoryRouter initialEntries={['/catalog']}>
          <Routes>
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='main-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='main' />
                  Main page
                </div>
              }
              path='/main'
            />
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='catalog-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='catalog' />
                  Catalog page
                  <Button
                    data-testid='raspberry'
                    text='Add Raspberry ice cream, 1kg'
                    variant='secondary'
                    onClick={() => onClickHandler(products[0])}
                  />
                </div>
              }
              path='/catalog'
            />
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='shipping-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='shipping' />
                  Shipping page
                </div>
              }
              path='/shipping'
            />
            <Route
              element={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <div data-testid='about-us-test'>
                  <Header basicNavigationArray={basicNavigation} data-testid='aboutUs' />
                  About us
                </div>
              }
              path='/aboutUs'
            />
          </Routes>
        </MemoryRouter>
      </>
    );
  };

  it('Header render', async () => {
    render(
      <div style={{ width: '500px' }}>
        <TestComponent />
      </div>
    );
    expect(screen.getByTestId('catalog-test')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('raspberry-button'));
    expect(screen.getByTestId('catalog-popup-cart-opening')).toHaveTextContent('1 itemsNumber');
    await userEvent.click(screen.getByTestId('catalog-menu-toggle'));
    expect(screen.getByTestId('catalog-cross-icon')).toBeInTheDocument();
  });
});
