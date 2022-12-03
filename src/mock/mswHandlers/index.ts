import { allIceCreamImages } from './iceCreamImg';
import getProducts from './products/products';
import getGifts from './gifts/gifts';
import getRecentArticleInfo from './blogArticle/blogArticleInfo';
import getIceCreamThemes from './iceCreamThemes';

const globalMswHandlers = [...allIceCreamImages, getProducts, getGifts, getRecentArticleInfo, getIceCreamThemes];

export default globalMswHandlers;
