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
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8177%3A3516&t=IwFiqkkG9l4CJkM8-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Check Group'
      text='Two check groups are displayed as examples: radio-buttons and checkbox'
      style={{ maxWidth: '800px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <>
        <CheckGroup checkGroup={filterFatContent} name='test' data-testid='demo' inputType='radio' />
        <CheckGroup checkGroup={filterFillers} data-testid='demo' inputType='checkbox' />
      </>
    </StoryContainer>
  );
};
