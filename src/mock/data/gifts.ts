export interface IGift {
  /** Unique identification number of the gift */
  id: number;
  /** Name of the gift */
  name: string;
  /** Link to the image of the gift */
  imgLink: string;
  /** Description of the gift */
  description: string;
  /** Link to the page describing the conditions of getting the gift in details */
  link: string;
}

export const gifts: IGift[] = [
  {
    id: 0,
    name: 'raspberryGift',
    imgLink: '/corn-raspberry',
    description: 'raspberryGiftDescription',
    link: '#',
  },
  {
    id: 1,
    name: 'marshmallowGift',
    imgLink: '/corn-marshmallow',
    description: 'marshmallowGiftDescription',
    link: '#',
  },
];
