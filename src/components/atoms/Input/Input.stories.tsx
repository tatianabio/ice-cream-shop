import Input from './Input';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7574%3A3227&t=GvLTiUQXqsXN2Gjj-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Input' text='Default, invalid, disabled' hasPinkBackground={false}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <Input placeholder='Placeholder' data-testid='default' />
        <Input initialValue='Invalid value' isInvalid placeholder='Placeholder' data-testid='invalid' />
        <Input initialValue='Disabled' disabled placeholder='Placeholder' data-testid='disabled' />
      </div>
    </StoryContainer>
  );
};
