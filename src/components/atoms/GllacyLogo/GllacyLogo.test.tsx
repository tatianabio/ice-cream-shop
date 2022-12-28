import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { routerArray } from './utils';

describe('Gllacy Logo tests', () => {
  const createTestContainer = () => {
    const router = createMemoryRouter(routerArray, { initialEntries: ['/demo'] });
    render(<RouterProvider router={router} />);
    return router;
  };

  it('Gllacy Logo render', async () => {
    const myRouter = createTestContainer();
    expect(screen.getByTestId('demo-gllacy-logo')).toBeInTheDocument();
    expect(myRouter.state.location.pathname).toEqual('/demo');
    await userEvent.click(screen.getByTestId('demo-gllacy-logo'));
    expect(myRouter.state.location.pathname).toEqual('/main');
    expect(screen.getByTestId('main-test')).toBeInTheDocument();
    expect(screen.queryByTestId('demo-test')).not.toBeInTheDocument();
  });
});
