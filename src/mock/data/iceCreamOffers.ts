import { fillers, IProduct } from './products';

export interface IIceCreamOffer {
  /** The unique identification number of the ice cream of the offer */
  id: number;
  /** The short description of the ice cream of the offer */
  title: string;
  /** The link to the representative image of the ice cream of the offer */
  imgLink: string;
  /** The detailed description of the ice cream of the offer */
  description: string;
  /** The color of the page's background stated by the offer */
  backgroundColor: string;
  /** Detailed information about the ice cream product proposed by the offer */
  productInfo: IProduct;
}

export const iceCreamOffers: IIceCreamOffer[] = [
  {
    id: 0,
    title: 'strawberryCornTitle',
    description: 'strawberryCornDescription',
    imgLink: '/corn-strawberry',
    backgroundColor: 'pink',
    productInfo: {
      id: 4,
      name: 'strawberry',
      description: 'strawberryDescription',
      price: 4.8,
      fatContent: 5,
      rating: 80,
      imgLink: '/strawberry',
      fillers: [fillers[4]],
      isAvailable: true,
    },
  },
  {
    id: 1,
    title: 'bananaCornTitle',
    description: 'bananaCornDescription',
    imgLink: '/corn-banana',
    backgroundColor: 'blue',
    productInfo: {
      id: 5,
      name: 'banana',
      description: 'bananaDescription',
      price: 6.0,
      fatContent: 10,
      rating: 75,
      imgLink: '/banana',
      fillers: [fillers[2]],
      isAvailable: true,
    },
  },
  {
    id: 2,
    title: 'caramelCornTitle',
    description: 'caramelCornDescription',
    imgLink: '/corn-caramel',
    backgroundColor: 'yellow',
    productInfo: {
      id: 6,
      name: 'caramel',
      description: 'caramelDescription',
      price: 5.8,
      fatContent: 8,
      rating: 70,
      imgLink: '/caramel',
      fillers: [fillers[3]],
      isAvailable: true,
    },
  },
];
