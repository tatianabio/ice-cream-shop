import SocialMedia from './SocialMedia';
import StoryContainer from '../../storybookUtils/StoryContainer';

export default {
  title: 'Components/Molecules/SocialMedia',
  component: SocialMedia,
};

export const Demo = () => {
  return (
    <StoryContainer title='Social Media List'>
      <SocialMedia />
    </StoryContainer>
  );
};
