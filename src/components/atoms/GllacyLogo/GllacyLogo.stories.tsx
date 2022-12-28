import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { routerArray } from '../Breadcrumbs/utils';
import StoryContainer from '../../storybookUtils/StoryContainer';
import GllacyLogo from './GllacyLogo';

export default {
  title: 'Components/Atoms/GllacyLogo',
  component: GllacyLogo,
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Demo = () => {
  const router = createMemoryRouter(routerArray, { initialEntries: ['/demo'] });

  return (
    <StoryContainer title='Gllacy Shop Logo' text='in a demo page as an example'>
      <RouterProvider router={router} />
    </StoryContainer>
  );
};
