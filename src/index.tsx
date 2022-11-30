import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './i18n';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <div>Hello world!</div>,
  },
  {
    path: '/catalog',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate replace to='/home' />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
