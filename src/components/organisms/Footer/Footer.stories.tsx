import React from 'react';
import StoryContainer from '../../storybookUtils/StoryContainer';
import Footer from './Footer';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=56%3A1459&t=gXoHw6LAr4QvJTYT-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Footer'
      style={{ maxWidth: '1200px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <Footer data-testid='demo' />
    </StoryContainer>
  );
};
