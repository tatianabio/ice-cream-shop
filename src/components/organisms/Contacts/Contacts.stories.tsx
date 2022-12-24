import React from 'react';
import Contacts from './Contacts';
import StoryContainer from '../../storybookUtils/StoryContainer';
import globalMswHandlers from '../../../mock/mswHandlers';
import GlobalMessage from '../../atoms/GlobalMessage';

export default {
  title: 'Components/Organisms/Contacts',
  component: Contacts,
  parameters: {
    msw: {
      handlers: globalMswHandlers,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8108%3A5915&t=oZIRDfiPFcwImQIU-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Contacts'
      style={{ maxWidth: '1200px', minHeight: '600px', height: 'min-content', padding: '15px' }}
    >
      <>
        <GlobalMessage data-testid='demo' />
        <Contacts data-testid='demo' />
      </>
    </StoryContainer>
  );
};
