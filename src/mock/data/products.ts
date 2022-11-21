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
    name: 'sugar',
    id: 1,
  },
  {
    name: 'fruits',
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
    name: 'Малинка',
    description: 'Сливочное мороженое с малиновым джемом',
    price: 310,
    fatContent: 5,
    rating: 100,
    imgLink: 'https://myserver.com/0',
    fillers: [fillers[0], fillers[2]],
  },
];
