import { allIceCreamImages } from '../ice-cream-img';
import getRecentArticleInfo from './blog-article-info';

const blogArticleMswHandlers = [...allIceCreamImages, getRecentArticleInfo];
export default blogArticleMswHandlers;
