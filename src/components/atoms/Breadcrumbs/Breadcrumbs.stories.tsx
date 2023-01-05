import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import StoryContainer from '../../storybookUtils/StoryContainer';
import { routerArray } from './utils';

export default {
  title: 'Components/Atoms/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=8153%3A3258&t=NLBtXuXkMTqBj2nE-4',
    },
  },
};

// TODO: amend the router as in the header

export const Demo = () => {
  const router = createMemoryRouter(routerArray, { initialEntries: ['/catalog'] });
  return (
    <StoryContainer title='Breadcrumbs' text='in Catalog page as an example'>
      <RouterProvider router={router} />
    </StoryContainer>
  );
};
