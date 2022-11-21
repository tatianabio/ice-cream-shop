import getProducts from './products';
import { allIceCreamImages } from './ice-cream-img';

const productsMswHandlers = [...allIceCreamImages, getProducts];
export default productsMswHandlers;
