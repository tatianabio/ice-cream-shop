import { rest } from 'msw';
import { gifts } from '../../data/gifts';

const getGifts = rest.get('/gifts', (_, res, ctx) => {
  return res(ctx.json(gifts));
});

export default getGifts;
