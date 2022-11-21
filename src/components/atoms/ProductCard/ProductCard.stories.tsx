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
    <StoryContainer
      title='Product card'
      style={{
        backgroundColor: 'var(--special-light)',
        padding: '20px',
      }}
    >
      <ProductCard data={products[0]} />
    </StoryContainer>
  );
};
