import React from 'react';
import SocialButton from './SocialButton';
import StoryContainer from '../../utils/StoryContainer';

export default {
  title: 'Components/Atoms/SocialButton',
  component: SocialButton,
};

export const Demo = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--special-light)',
        padding: '16px',
        width: 'fit-content',
      }}
    >
      <StoryContainer title={'Social Networks Links'} text={'vkontakte'}>
        <SocialButton socialMedia={'vkontakte'} />
      </StoryContainer>
      <StoryContainer text={'telegram'}>
        <SocialButton socialMedia={'telegram'} />
      </StoryContainer>
      <StoryContainer text={'youtube'}>
        <SocialButton socialMedia={'youtube'} />
      </StoryContainer>
    </div>
  );
};
