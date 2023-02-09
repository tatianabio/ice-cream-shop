interface ICheckItem {
  /** The label of the item */
  label: string;
  /** A unique value name of the item that will be sent to a server */
  valueName: string;
  /** Is this item checked? */
  isInitiallyChecked: boolean;
}

export interface ICheckList {
  /** The title of the list */
  listTitle: string;
  /** The items that are included into the list */
  list: ICheckItem[];
}

// export const filterFatContent: ICheckList = {
//   listTitle: 'fat-content',
//   list: [
//     {
//       label: '0%',
//       valueName: '0',
//       isInitiallyChecked: false,
//     },
//     {
//       label: 'under10',
//       valueName: 'under-10',
//       isInitiallyChecked: true,
//     },
//     {
//       label: 'under30',
//       valueName: 'under-30',
//       isInitiallyChecked: false,
//     },
//     {
//       label: 'above30',
//       valueName: 'above-30',
//       isInitiallyChecked: false,
//     },
//   ],
// };

export const filterFatContent: ICheckList['list'] = [
  {
    label: '0%',
    valueName: '0',
    isInitiallyChecked: false,
  },
  {
    label: 'under10',
    valueName: 'under-10',
    isInitiallyChecked: true,
  },
  {
    label: 'under30',
    valueName: 'under-30',
    isInitiallyChecked: false,
  },
  {
    label: 'above30',
    valueName: 'above-30',
    isInitiallyChecked: false,
  },
];

export const filterFillers: ICheckList['list'] = [
  {
    label: 'chocolateFiller',
    valueName: 'chocolateFiller',
    isInitiallyChecked: true,
  },
  {
    label: 'sprinkles',
    valueName: 'sprinkles',
    isInitiallyChecked: true,
  },
  {
    label: 'fruit',
    valueName: 'fruit',
    isInitiallyChecked: false,
  },
  {
    label: 'syrups',
    valueName: 'syrups',
    isInitiallyChecked: false,
  },
  {
    label: 'jams',
    valueName: 'jams',
    isInitiallyChecked: false,
  },
];
