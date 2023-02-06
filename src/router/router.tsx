import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import MainPage from '../components/pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/main',
    element: <MainPage data-testid='app' />,
  },
  {
    path: '/catalog',
    element: <div>Catalog</div>,
  },
  {
    path: '*',
    element: <Navigate replace to='/main' />,
  },
]);

export default router;
