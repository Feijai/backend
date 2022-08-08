import React from 'react';
import type { RouteObject } from "react-router-dom";
import Layout from './Layout'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'

const routes: RouteObject[] = [
  {
    path: "/backend",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export default routes