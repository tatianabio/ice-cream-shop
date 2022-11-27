import getProducts from './products';
import { allIceCreamImages } from '../iceCreamImg/iceCreamImg';

const productsMswHandlers = [...allIceCreamImages, getProducts];
export default productsMswHandlers;
