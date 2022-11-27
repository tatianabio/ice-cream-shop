import { allIceCreamImages } from '../iceCreamImg/iceCreamImg';
import getRecentArticleInfo from './blogArticleInfo';

const blogArticleMswHandlers = [...allIceCreamImages, getRecentArticleInfo];
export default blogArticleMswHandlers;
