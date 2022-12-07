export interface IIceCreamOffer {
  /** The unique identification number of the ice cream of the theme */
  id: number;
  /** The short description of the ice cream of the theme */
  title: string;
  /** The link to the representative image of the ice cream of the theme */
  imgLink: string;
  /** The detailed description of the ice cream of the theme */
  description: string;
  /** The color of the page's background stated by the theme */
  backgroundColor: string;
}

export const iceCreamOffers: IIceCreamOffer[] = [
  {
    id: 0,
    title: 'strawberryCornTitle',
    description: 'strawberryCornDescription',
    imgLink: '/corn-strawberry',
    backgroundColor: 'var(--special-light)',
  },
  {
    id: 1,
    title: 'bananaCornTitle',
    description: 'bananaCornDescription',
    imgLink: '/corn-banana',
    backgroundColor: 'var(--special-blue)',
  },
  {
    id: 2,
    title: 'caramelCornTitle',
    description: 'caramelCornDescription',
    imgLink: '/corn-caramel',
    backgroundColor: 'var(--special-yellow)',
  },
];
