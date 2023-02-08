interface ICheckItem {
  /** The label of the item */
  label: string;
  /** A unique value name of the item that will be sent to a server */
  valueName: string;
  /** Is this item checked? */
  isChecked?: boolean;
}

export interface ICheckList {
  /** The title of the list */
  listTitle: string;
  /** The items that are included into the list */
  list: ICheckItem[];
}

export const filterFatContent: ICheckList = {
  listTitle: 'fat-content',
  list: [
    {
      label: '0%',
      valueName: '0',
    },
    {
      label: 'up to 10%',
      valueName: 'under-10',
      isChecked: true,
    },
    {
      label: 'up to 30%',
      valueName: 'under-30',
    },
    {
      label: 'more than 30%',
      valueName: 'above-30',
    },
  ],
};

// TODO: add Fr and En translations for all words

export const filterFillers: ICheckList = {
  listTitle: 'fillers',
  list: [
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
    },
    {
      label: 'syrups',
      valueName: 'syrups',
    },
    {
      label: 'jams',
      valueName: 'jams',
    },
  ],
};
