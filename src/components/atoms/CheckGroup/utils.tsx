interface ICheckItem {
  /** The label of the item */
  label: string;
  /** A unique value name of the item that will be sent to a server */
  valueName: string;
  /** Is this item checked? */
  isChecked: boolean;
}

export interface ICheckList {
  /** The title of the list */
  listTitle: string;
  /** The items that are included into the list */
  list: ICheckItem[];
}

export const filterFatContent: ICheckList['list'] = [
  {
    label: '0%',
    valueName: '0',
    isChecked: false,
  },
  {
    label: 'under10',
    valueName: 'under-10',
    isChecked: true,
  },
  {
    label: 'under30',
    valueName: 'under-30',
    isChecked: false,
  },
  {
    label: 'above30',
    valueName: 'above-30',
    isChecked: false,
  },
];

export const filterFillers: ICheckList['list'] = [
  {
    label: 'chocolateFiller',
    valueName: 'chocolateFiller',
    isChecked: true,
  },
  {
    label: 'sprinkles',
    valueName: 'sprinkles',
    isChecked: true,
  },
  {
    label: 'fruit',
    valueName: 'fruit',
    isChecked: false,
  },
  {
    label: 'syrups',
    valueName: 'syrups',
    isChecked: false,
  },
  {
    label: 'jams',
    valueName: 'jams',
    isChecked: false,
  },
];
