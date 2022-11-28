import { allIceCreamImages } from './iceCreamImg';
import getProducts from './products/products';
import getGifts from './gifts/gifts';
import getRecentArticleInfo from './blogArticle/blogArticleInfo';

const globalMswHandlers = [...allIceCreamImages, getProducts, getGifts, getRecentArticleInfo];

export default globalMswHandlers;
