import { rest } from 'msw';
import { iceCreamOffers } from '../../data/iceCreamOffers';

const getIceCreamThemes = rest.get('/iceCreamOffers', (_, res, ctx) => {
  return res(ctx.json(iceCreamOffers));
});

export default getIceCreamThemes;
