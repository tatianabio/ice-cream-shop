import Textarea from './Textarea';
import StoryContainer from '../../storybookUtils/StoryContainer';

export default {
  title: 'Components/Atoms/Textarea',
  component: Textarea,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8177%3A3518&t=92fzZeIxuIo2Kxvs-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Textarea' text='Default, invalid, disabled' hasPinkBackground={false}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '440px' }}>
        <Textarea placeholder='Placeholder' data-testid='default' />
        <Textarea initialValue='Invalid value' isInvalid placeholder='Placeholder' data-testid='invalid' />
        <Textarea initialValue='Disabled' disabled placeholder='Placeholder' data-testid='disabled' />
      </div>
    </StoryContainer>
  );
};
