export interface IProduct {
  id: number;
  name: string;
  imgLink: string;
  description: string;
  price: number;
  rating: number;
  fatContent: number;
  fillers?: IFillers[];
}

export interface IFillers {
  name: string;
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
  },
];
