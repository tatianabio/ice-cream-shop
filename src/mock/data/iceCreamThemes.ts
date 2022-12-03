export interface IIceCreamTheme {
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

export const iceCreamThemes: IIceCreamTheme[] = [
  {
    id: 1,
    title: 'strawberryCornTitle',
    description: 'strawberryCornDescription',
    imgLink: '/corn-strawberry',
    backgroundColor: 'var(--special-light)',
  },
  {
    id: 2,
    title: 'bananaCornTitle',
    description: 'bananaCornDescription',
    imgLink: '/corn-banana',
    backgroundColor: 'var(--special-blue)',
  },
  {
    id: 3,
    title: 'caramelCornTitle',
    description: 'caramelCornDescription',
    imgLink: '/corn-caramel',
    backgroundColor: 'var(--special-yellow)',
  },
];
