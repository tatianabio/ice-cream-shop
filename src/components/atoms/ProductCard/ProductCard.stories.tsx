import { action } from '@storybook/addon-actions';
import React from 'react';
import ProductCard from './ProductCard';
import StoryContainer from '../../storybookUtils/StoryContainer';
import { IProduct, products } from '../../../mock/data/products';
import globalMswHandlers from '../../../mock/mswHandlers';

export default {
  title: 'Components/Atoms/ProductCard',
  component: ProductCard,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=39%3A749&t=VxkNuLSmtnXubnNX-4',
    },
  },
};

interface IDemo {
  onClickTest?: (product: IProduct) => void;
}

export const Demo = ({ onClickTest }: IDemo) => {
  const buttonOnClick = (product: IProduct) => {
    onClickTest ? onClickTest(product) : action('Add to cart')(product);
  };

  return (
    <>
      <StoryContainer title='Product card' text='Available product'>
        <ProductCard data={products[0]} addToCart={buttonOnClick} data-testid='available-product' />
      </StoryContainer>
      <StoryContainer text='Not available product'>
        <ProductCard
          data={{ ...products[0], isAvailable: false }}
          addToCart={action('Add to cart')}
          data-testid='not-available-product'
        />
      </StoryContainer>
    </>
  );
};
