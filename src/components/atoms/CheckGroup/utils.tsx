export interface ICheckItem {
  /** The label of the item */
  label: string;
  /** A unique value name of the item that will be sent to a server */
  valueName: string;
}

export const filterFatContent: ICheckItem[] = [
  {
    label: '0%',
    valueName: '0',
  },
  {
    label: 'under10',
    valueName: 'under-10',
  },
  {
    label: 'under30',
    valueName: 'under-30',
  },
  {
    label: 'above30',
    valueName: 'above-30',
  },
];

export const filterFillers: ICheckItem[] = [
  {
    label: 'chocolateFiller',
    valueName: 'chocolateFiller',
  },
  {
    label: 'sprinkles',
    valueName: 'sprinkles',
  },
  {
    label: 'fruit',
    valueName: 'fruit',
  },
  {
    label: 'syrups',
    valueName: 'syrups',
  },
  {
    label: 'jams',
    valueName: 'jams',
  },
];
