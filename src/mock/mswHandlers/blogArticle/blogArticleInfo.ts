import { rest } from 'msw';
import { blogArticleInfo } from '../../data/blogArticleInfo';

const getRecentArticleInfo = rest.get('/recent-article', (_, res, ctx) => {
  return res(ctx.json(blogArticleInfo));
});

export default getRecentArticleInfo;
