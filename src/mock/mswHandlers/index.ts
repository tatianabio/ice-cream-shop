import { allIceCreamImages } from './iceCreamImg';
import getProducts from './products/products';
import getGifts from './gifts/gifts';
import getRecentArticleInfo from './blogArticle/blogArticleInfo';
import getIceCreamThemes from './iceCreamThemes';
import postRequest from './postRequest';

const globalMswHandlers = [
  ...allIceCreamImages,
  getProducts,
  getGifts,
  getRecentArticleInfo,
  getIceCreamThemes,
  postRequest,
];

export default globalMswHandlers;
