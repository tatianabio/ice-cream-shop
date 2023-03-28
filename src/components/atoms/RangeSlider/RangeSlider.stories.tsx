import StoryContainer from '../../storybookUtils/StoryContainer';
import RangeSlider from './RangeSlider';

export default {
  title: 'Components/Atoms/RangeSlider',
  component: RangeSlider,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=22%3A3669&t=1B4uSFzwzeY63wl3-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Range Slider' style={{ maxWidth: '800px', minHeight: '500px', paddingLeft: '30px' }}>
      <RangeSlider defaultValue={[4, 9]} data-testid='demo' />
    </StoryContainer>
  );
};
