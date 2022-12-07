import globalMswHandlers from '../../../mock/mswHandlers';
import SliderTile from './SliderTile';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/SliderTile',
  component: SliderTile,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8090%3A3382&t=15CNurwt02minJF0-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Slider tile' style={{ maxWidth: '800px', minHeight: '500px', paddingLeft: '30px' }}>
      <SliderTile data-testid='offers' />
    </StoryContainer>
  );
};
