import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import MainPage from '../components/pages/MainPage';
import CatalogPage from '../components/pages/CatalogPage';

const router = createBrowserRouter([
  {
    path: '/main',
    element: <MainPage data-testid='app' />,
  },
  {
    path: '/catalog',
    element: <CatalogPage data-testid='app' />,
  },
  {
    path: '*',
    element: <Navigate replace to='/main' />,
  },
]);

export default router;
