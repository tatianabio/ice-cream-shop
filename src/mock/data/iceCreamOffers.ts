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
  /** The unique identification number of the ice cream product proposed by the offer */
  productId: number;
}

export const iceCreamOffers: IIceCreamOffer[] = [
  {
    id: 0,
    title: 'strawberryCornTitle',
    description: 'strawberryCornDescription',
    imgLink: '/corn-strawberry',
    backgroundColor: 'var(--special-light)',
    productId: 4,
  },
  {
    id: 1,
    title: 'bananaCornTitle',
    description: 'bananaCornDescription',
    imgLink: '/corn-banana',
    backgroundColor: 'var(--special-blue)',
    productId: 5,
  },
  {
    id: 2,
    title: 'caramelCornTitle',
    description: 'caramelCornDescription',
    imgLink: '/corn-caramel',
    backgroundColor: 'var(--special-yellow)',
    productId: 6,
  },
];
