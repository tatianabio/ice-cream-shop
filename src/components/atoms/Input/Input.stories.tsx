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
        <Input defaultValue='test' placeholder='Placeholder' />
        <Input defaultValue='Invalid value' isInvalid />
        <Input defaultValue='Disabled' disabled />
      </div>
    </StoryContainer>
  );
};
