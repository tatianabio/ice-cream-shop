import StoryContainer from '../../storybookUtils/StoryContainer';
import Select from './Select';
import sortingOptions from './utils';

export default {
  title: 'Components/Atoms/Select',
  component: Select,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8177%3A3519&t=UkQKTE7rEahwT8yq-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Select' style={{ maxWidth: '800px', minHeight: '500px', paddingLeft: '30px' }}>
      <Select data-testid='demo' selectLabel='demo' optionsList={sortingOptions} />
    </StoryContainer>
  );
};
