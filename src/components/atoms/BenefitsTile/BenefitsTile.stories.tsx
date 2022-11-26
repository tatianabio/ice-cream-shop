import BenefitsTile from './BenefitsTile';

export default {
  title: 'Components/Atoms/BenefitsTile',
  component: BenefitsTile,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7577%3A3604&t=GvLTiUQXqsXN2Gjj-4',
    },
  },
};

export const Demo = () => {
  return <BenefitsTile data-testid='test' />;
};
