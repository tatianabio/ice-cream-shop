import React from 'react';
import { shallow } from 'zustand/shallow';
import globalMswHandlers from '../../../mock/mswHandlers';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GlobalMessage, { sendMessageToDisplay } from '../../atoms/GlobalMessage';
import CartTile from './CartTile';
import Button from '../../atoms/Button';
import cartStore, { ICartStore } from './Cart.store';
import { IProduct, products } from '../../../mock/data/products';

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

const DemoComponent = () => {
  const addProductToCart = cartStore((store: ICartStore) => store.addProduct, shallow);

  const onClickHandler = (product: IProduct) => {
    addProductToCart(product);
    sendMessageToDisplay('successfulAddingToCart');
  };

  return (
    <>
      <Button
        data-testid='demo'
        text='Add Raspberry ice cream, 1kg'
        variant='secondary'
        onClick={() => onClickHandler(products[0])}
      />
      <Button
        data-testid='demo'
        text='Add Bubblegum ice cream, 1kg'
        variant='secondary'
        onClick={() => onClickHandler(products[1])}
      />
      <CartTile data-testid='demo' />
    </>
  );
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Cart Tile'
      text='Buttons for adding products to cart are not included in the Cart Tile component'
      style={{ maxWidth: '600px', minHeight: '250px', height: 'min-content', padding: '20px' }}
      hasPinkBackground={false}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <DemoComponent />
      </>
    </StoryContainer>
  );
};
