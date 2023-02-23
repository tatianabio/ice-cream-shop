export interface IOption {
  key: string;
  label: string;
}

const sortingOptions: IOption[] = [
  {
    key: 'popularity',
    label: 'byPopularity',
  },
  {
    key: 'cheap',
    label: 'cheapestFirst',
  },
  {
    key: 'expensive',
    label: 'expensiveFirst',
  },
];

export default sortingOptions;
