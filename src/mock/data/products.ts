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

export const fillers: IFillers[] = [
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
  {
    id: 1,
    name: 'bubblegum',
    description: 'bubblegumDescription',
    price: 5.5,
    fatContent: 9,
    rating: 85,
    imgLink: '/bubblegum',
    fillers: [fillers[1]],
    isAvailable: true,
  },
  {
    id: 2,
    name: 'pistachio',
    description: 'pistachioDescription',
    price: 5.9,
    fatContent: 8,
    rating: 95,
    imgLink: '/pistachio',
    fillers: [fillers[0]],
    isAvailable: true,
  },
  {
    id: 3,
    name: 'blueberry',
    description: 'blueberryDescription',
    price: 5.6,
    fatContent: 2,
    rating: 90,
    imgLink: '/blueberry',
    fillers: [fillers[2]],
    isAvailable: true,
  },
  {
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
  {
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
  {
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
  {
    id: 7,
    name: 'blackberry',
    description: 'blackberryDescription',
    price: 5.0,
    fatContent: 4,
    rating: 65,
    imgLink: '/blackberry',
    fillers: [fillers[4]],
    isAvailable: true,
  },
  {
    id: 8,
    name: 'chocolate',
    description: 'chocolateDescription',
    price: 6.2,
    fatContent: 7,
    rating: 60,
    imgLink: '/chocolate',
    fillers: [fillers[0]],
    isAvailable: true,
  },
  {
    id: 9,
    name: 'lemon',
    description: 'lemonDescription',
    price: 4.9,
    fatContent: 2,
    rating: 55,
    imgLink: '/lemon',
    fillers: [fillers[2]],
    isAvailable: true,
  },
  {
    id: 10,
    name: 'menthol',
    description: 'mentholDescription',
    price: 4.7,
    fatContent: 3,
    rating: 50,
    imgLink: '/menthol',
    fillers: [fillers[3]],
    isAvailable: true,
  },
  {
    id: 11,
    name: 'nut',
    description: 'nutDescription',
    price: 6.4,
    fatContent: 6,
    rating: 45,
    imgLink: '/nut',
    fillers: [fillers[0]],
    isAvailable: true,
  },
];
