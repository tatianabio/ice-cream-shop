import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import CatalogList from './CatalogList';
import { products } from '../../../mock/data/products';
import GlobalMessage from '../../atoms/GlobalMessage';

const TestComponent = () => {
  return (
    <>
      <GlobalMessage data-testid='demo' />
      <CatalogList data-testid='demo' displayedProductsNumber={4} productsList={products} />
    </>
  );
};

describe('Catalog List Tests', () => {
  it('render', async () => {
    render(<TestComponent />);
    expect(screen.getByTestId('demo-catalog-list')).toBeInTheDocument();
    await userEvent.click(screen.getAllByTestId('demo-cart-button')[0]);
    expect(screen.queryByTestId('demo-global-message')).toHaveClass('global-message__item--success');
  });
});
