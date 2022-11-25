import Input from './Input';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

export const Demo = () => {
  return (
    <StoryContainer title='Input' text='Default, invalid, disabled' hasPinkBackground={false}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <Input placeholder='Placeholder' />
        <Input initialValue='Invalid value' isInvalid placeholder='Placeholder' />
        <Input initialValue='Disabled' disabled placeholder='Placeholder' />
      </div>
    </StoryContainer>
  );
};
