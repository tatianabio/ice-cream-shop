import { rest } from 'msw';

const postRequest = rest.post('*', (_, res, ctx) => {
  return res(ctx.json({}), ctx.status(200), ctx.delay(1000));
});

export const postRequestWithoutDelaySuccess = rest.post('*', (_, res, ctx) => {
  return res(ctx.json({}), ctx.status(200));
});

export const postRequestWithoutDelayError = rest.post('*', (_, res, ctx) => {
  return res(ctx.json({}), ctx.status(500));
});

export default postRequest;
