import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './i18n';
import App from './App';
import Breadcrumbs from './components/atoms/Breadcrumbs';
import { breadcrumbsCatalog } from './components/atoms/Breadcrumbs/Breadcrumbs.stories';

const router = createBrowserRouter([
  {
    path: '/main',
    element: <Breadcrumbs breadcrumbsArray={breadcrumbsCatalog} />,
  },
  {
    path: '/catalog',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate replace to='/main' />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
