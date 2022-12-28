import React from 'react';
import GllacyLogo from '../GllacyLogo';

export const routerArray = [
  {
    path: '/main',
    element: <div data-testid='main-test'>Main page</div>,
  },
  {
    path: '/catalog',
    element: <div data-testid='catalog-test'>Catalog page</div>,
  },
  {
    path: '/demo',
    element: (
      <div data-testid='demo-test'>
        <h2>Demo page</h2>
        <GllacyLogo data-testid='demo' />
      </div>
    ),
  },
];

export default routerArray;
