import React from 'react';
import StoryContainer from '../../storybookUtils/StoryContainer';
import { filterFatContent, filterFillers } from './utils';
import globalMswHandlers from '../../../mock/mswHandlers';
import CheckGroup from './CheckGroup';

export default {
  title: 'Components/Atoms/CheckGroup',
  component: CheckGroup,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Check Group'
      text='Radio-buttons and checkbox as examples'
      style={{ maxWidth: '800px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <>
        <CheckGroup checkGroup={filterFatContent} data-testid='demo' inputType='radio' />
        <CheckGroup checkGroup={filterFillers} data-testid='demo' inputType='checkbox' />
      </>
    </StoryContainer>
  );
};
