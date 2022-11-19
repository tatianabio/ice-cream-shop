import React from 'react';
import SocialButton from './SocialButton';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/SocialButton',
  component: SocialButton,
};

export const Demo = () => (
  <div
    style={{
      backgroundColor: 'var(--special-light)',
      padding: '16px',
      width: 'fit-content',
    }}
  >
    <StoryContainer title='Social Networks Links' text='vkontakte'>
      <SocialButton socialMedia='vkontakte' data-testid='vkontakte-link' />
    </StoryContainer>
    <StoryContainer text='telegram'>
      <SocialButton socialMedia='telegram' data-testid='telegram-link' />
    </StoryContainer>
    <StoryContainer text='youtube'>
      <SocialButton socialMedia='youtube' data-testid='youtube-link' />
    </StoryContainer>
  </div>
);
