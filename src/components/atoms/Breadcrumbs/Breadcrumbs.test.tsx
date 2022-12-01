import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { routerArray } from './utils';

describe('Breadcrumbs tests', () => {
  const createTestContainer = () => {
    const router = createMemoryRouter(routerArray, { initialEntries: ['/catalog'] });
    render(<RouterProvider router={router} />);
    return router;
  };

  it('Breadcrumbs render and links', async () => {
    const myRouter = createTestContainer();
    expect(screen.getByTestId('catalog-test')).toBeInTheDocument();
    expect(screen.queryByTestId('main-test')).not.toBeInTheDocument();
    expect(myRouter.state.location.pathname).toEqual('/catalog');
    await userEvent.click(screen.getByText('main'));
    expect(myRouter.state.location.pathname).toEqual('/main');
    expect(screen.getByTestId('main-test')).toBeInTheDocument();
    expect(screen.queryByTestId('catalog-test')).not.toBeInTheDocument();
  });
});
