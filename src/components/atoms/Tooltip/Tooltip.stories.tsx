import React from 'react';
import Tooltip from './Tooltip';
import StoryContainer from '../../storybookUtils/StoryContainer';

export default {
  title: 'Components/Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8177%3A3517&t=qPXeT81gaXCd6qVE-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer title='Tooltip' text='Label is not included in the Tooltip component'>
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <span>Label</span>
        <Tooltip data-testid='demo' text='Demo tooltip text' />
      </div>
    </StoryContainer>
  );
};
