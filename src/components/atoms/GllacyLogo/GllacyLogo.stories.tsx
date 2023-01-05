import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { routerArray } from './utils';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GllacyLogo from './GllacyLogo';

export default {
  title: 'Components/Atoms/GllacyLogo',
  component: GllacyLogo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=576%3A2521&t=HgtyAjyrwp5Az3Qh-4',
    },
  },
};

// TODO: amend router like in the Header

export const Demo = () => {
  const router = createMemoryRouter(routerArray, { initialEntries: ['/demo'] });

  return (
    <StoryContainer title='Gllacy Shop Logo' text='in a demo page as an example'>
      <RouterProvider router={router} />
    </StoryContainer>
  );
};
