import BasicModal from './BasicModal';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Organisms/BasicModal',
  component: BasicModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=54%3A650&t=ANKYOqsJQGTM1gR2-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Basic Modal'
      style={{ maxWidth: '1200px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <BasicModal data-testid='demo' openingButtonText='Open the modal'>
        <p>test modal</p>
      </BasicModal>
    </StoryContainer>
  );
};
