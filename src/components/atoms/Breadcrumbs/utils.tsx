import React from 'react';
import Breadcrumbs, { IBreadcrumb } from './Breadcrumbs';

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
];
