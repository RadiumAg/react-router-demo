/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Root } from './pages/root';
import ErrorPage from './pages/error-page';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './pages/contact';
import { loader as rootLoader } from './pages/root';
import EditContact, { action as editAction } from './pages/edit-contact';
import { action as destroyAction } from './pages/destroy';
import Index from './pages';
import AddContact, { action as addAction } from './pages/add-contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'contacts/add',
            element: <AddContact />,
            action: addAction,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
