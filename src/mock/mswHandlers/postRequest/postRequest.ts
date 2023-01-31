import { rest } from 'msw';

const postRequest = rest.post('*', (req, res, ctx) => {
  const status = 200;

  return res(ctx.json({}), ctx.status(status), ctx.delay(1000));
});

export const postRequestWithoutDelaySuccess = rest.post('*', (_, res, ctx) => {
  return res(ctx.json({}), ctx.status(200));
});

export const postRequestWithoutDelayError = rest.post('*', (_, res, ctx) => {
  return res(ctx.json({}), ctx.status(500));
});

export default postRequest;

const postRequestFn = (status = 200, delay = 1000) =>
  rest.post('*', (_, res, ctx) => {
    return res(ctx.json({}), ctx.status(status), ctx.delay(delay));
  });
