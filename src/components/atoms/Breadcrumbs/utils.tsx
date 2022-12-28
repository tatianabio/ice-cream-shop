import React from 'react';
import Breadcrumbs, { IBreadcrumb } from './Breadcrumbs';
import GllacyLogo from '../GllacyLogo';

export const breadcrumbsCatalog: IBreadcrumb[] = [
  {
    name: 'main',
    link: '/main',
    isActive: false,
  },
  {
    name: 'catalog',
    link: '/catalog',
    isActive: true,
  },
];

export const routerArray = [
  {
    path: '/main',
    element: <div data-testid='main-test'>Main page</div>,
  },
  {
    path: '/catalog',
    element: (
      <>
        <Breadcrumbs breadcrumbsArray={breadcrumbsCatalog} />
        <div data-testid='catalog-test'>Catalog page</div>
      </>
    ),
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
