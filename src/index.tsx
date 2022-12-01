import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './i18n';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/main',
    element: <App />,
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
