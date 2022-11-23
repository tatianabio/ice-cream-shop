import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import React from 'react';
import { Demo } from './ProductCard.stories';
import { products } from '../../../mock/data/products';

describe('Product Card Tests', () => {
  const onClick = jest.fn();

  beforeEach(() => render(<Demo onClickTest={onClick} />));

  it('Render', () => {
    // Title render
    expect(screen.getByTestId('available-product-title')).toHaveTextContent('raspberry');
    expect(screen.getByTestId('not-available-product-title')).toHaveTextContent('raspberry');

    // Description render
    expect(screen.getByTestId('available-product-description')).toHaveTextContent('raspberryDescription');
    expect(screen.getByTestId('not-available-product-description')).toHaveTextContent('raspberryDescription');

    // Price render
    expect(screen.getByTestId('available-product-price')).toHaveTextContent('5.1 $/kg');
    expect(screen.getByTestId('not-available-product-price')).toHaveTextContent('5.1 $/kg');

    // Img render, img--disabled class
    expect(screen.getByTestId('available-product-card')).toContainElement(screen.getByTestId('available-product-img'));
    expect(screen.getByTestId('available-product-img')).not.toHaveClass('product-card__img--disabled');
    expect(screen.getByTestId('not-available-product-card')).toContainElement(
      screen.getByTestId('not-available-product-img')
    );
    expect(screen.getByTestId('not-available-product-img')).toHaveClass('product-card__img--disabled');

    // Availability-info render
    expect(screen.getByTestId('not-available-product-card')).toContainElement(
      screen.getByTestId('not-available-product-availability-info')
    );
    expect(screen.getByTestId('available-product-card')).not.toContainElement(
      screen.getByTestId('not-available-product-availability-info')
    );

    // Cart-buttons render
    expect(screen.getByTestId('available-product-card')).toContainElement(
      screen.getByTestId('available-product-cart-button')
    );
    expect(screen.getByTestId('available-product-cart-button')).not.toHaveAttribute('disabled');
    expect(screen.getByTestId('not-available-product-card')).toContainElement(
      screen.getByTestId('not-available-product-cart-button')
    );
    expect(screen.getByTestId('not-available-product-cart-button')).toHaveAttribute('disabled');
  });

  it('Cart-buttons action', async () => {
    await userEvent.click(screen.getByTestId('available-product-cart-button'));
    expect(onClick).toBeCalledTimes(1);
    await userEvent.click(screen.getByTestId('available-product-cart-button'));
    expect(onClick).toBeCalledTimes(2);
    await userEvent.click(screen.getByTestId('not-available-product-cart-button'));
    expect(onClick).toBeCalledTimes(2);
  });

  it('Cart buttons focus', async () => {
    await userEvent.tab();
    expect(screen.getByTestId('available-product-cart-button')).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(onClick).toBeCalledWith(products[0]);
    await userEvent.tab();
    expect(screen.getByTestId('not-available-product-cart-button')).not.toHaveFocus();
  });
});
