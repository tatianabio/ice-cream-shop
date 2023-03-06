import { rest } from 'msw';
import { products } from '../../data/products';

const getProducts = rest.get('*/products', (_, res, ctx) => {
  return res(ctx.json(products));
});

export default getProducts;
