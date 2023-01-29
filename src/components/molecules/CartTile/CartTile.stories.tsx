import React from 'react';
import globalMswHandlers from '../../../mock/mswHandlers';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GlobalMessage from '../../atoms/GlobalMessage';
import CartTile from './CartTile';
import Button from '../../atoms/Button';
import { addProductToCart } from './Cart.store';
import { products } from '../../../mock/data/products';

export default {
  title: 'Components/Molecules/CartTile',
  component: CartTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=892%3A3462&t=nVgXBfaeFRdQhZDW-4',
    },
  },
};

export const Demo = () => {
  const onClickHandler = () => {
    addProductToCart(products[0]);
  };

  return (
    <StoryContainer
      title='Cart Tile'
      style={{ maxWidth: '600px', minHeight: '250px', height: 'min-content', padding: '40px' }}
      hasPinkBackground={false}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <CartTile data-testid='demo' />
        <Button data-testid='demo' text='Add a product to Cart' variant='secondary' onClick={onClickHandler} />
      </>
    </StoryContainer>
  );
};
