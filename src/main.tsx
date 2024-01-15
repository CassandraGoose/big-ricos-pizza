import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './Start/Start';
import Order from './Order/Order';
import Menu from './Menu/Menu';
import Coupons from './Coupons/Coupons';
import Tracker from './Tracker/Tracker';
import Rewards from './Rewards/Rewards';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import ModalContextProvider from './Context/ModalContextProvider.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Start />,
      },
      {
        path: '/restaurants',
        element: <Order />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/coupons',
        element: <Coupons />
      },
      {
        path: '/tracker',
        element: <Tracker />
      },
      {
        path: '/rewards',
        element: <Rewards />
      },
      {
        path: '/jobs',
        element: <Tracker />
      },
      {
        path: '/about',
        element: <Tracker />
      },
      {
        path: '/nutrition',
        element: <Tracker />
      },
      {
        path: '/ingredients',
        element: <Tracker />
      },
      {
        path: '/smart-school',
        element: <Tracker />
      },
      {
        path: '/business-orders',
        element: <Tracker />
      },
      {
        path: '/wedding-registry',
        element: <Tracker />
      },
      {
        path: '/fundraising',
        element: <Tracker />
      },
      {
        path: '/gift-cards',
        element: <Tracker />
      },
      {
        path: '/real-estate',
        element: <Tracker />
      },
      {
        path: '/recycling',
        element: <Tracker />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  </React.StrictMode>
);
