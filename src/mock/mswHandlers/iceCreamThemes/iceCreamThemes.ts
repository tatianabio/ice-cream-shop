import { rest } from 'msw';
import { iceCreamThemes } from '../../data/iceCreamThemes';

const getIceCreamThemes = rest.get('/iceCreamThemes', (_, res, ctx) => {
  return res(ctx.json(iceCreamThemes));
});

export default getIceCreamThemes;
