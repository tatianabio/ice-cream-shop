import { rest } from 'msw';

const postRequest = rest.post('*', (_, res, ctx) => {
  return res(ctx.json({}), ctx.status(500), ctx.delay(1000));
});

export default postRequest;
