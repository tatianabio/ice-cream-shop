import { action } from '@storybook/addon-actions';
import ProductCard from './ProductCard';
import productsMswHandlers from '../../../mock/msw-handlers';
import StoryContainer from '../../utils/StoryContainer';
import { products } from '../../../mock/data/products';

export default {
  title: 'Components/Atoms/ProductCard',
  component: ProductCard,
  parameters: {
    msw: {
      handlers: productsMswHandlers,
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Product card'>
      <ProductCard data={products[0]} addToCart={action('Add to cart')} />
    </StoryContainer>
  );
};
