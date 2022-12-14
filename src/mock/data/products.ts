export interface IProduct {
  /** Unique identification number of the product */
  id: number;
  /** Name of the product */
  name: string;
  /** Link to the image of the product */
  imgLink: string;
  /** Description of the product */
  description: string;
  /** Price of the product. Measured in $ per 1 kg */
  price: number;
  /** Popularity (rating) of the product. Measured in the number of kg sold during last 7 days */
  rating: number;
  /** Fat content of the product. Measured in % of final product */
  fatContent: number;
  /** Availability of the product at this moment */
  isAvailable: boolean;
  /** List of fillers contained by the product */
  fillers?: IFillers[];
}

export interface IFillers {
  /** The name of the filler */
  name: string;
  /** Unique identification number of the filler */
  id: number;
}

const fillers: IFillers[] = [
  {
    name: 'chocolate',
    id: 0,
  },
  {
    name: 'sprinkles',
    id: 1,
  },
  {
    name: 'fruit',
    id: 2,
  },
  {
    name: 'syrups',
    id: 3,
  },
  {
    name: 'jams',
    id: 4,
  },
];

export const products: IProduct[] = [
  {
    id: 0,
    name: 'raspberry',
    description: 'raspberryDescription',
    price: 5.1,
    fatContent: 5,
    rating: 100,
    imgLink: '/raspberry',
    fillers: [fillers[4]],
    isAvailable: true,
  },
];
