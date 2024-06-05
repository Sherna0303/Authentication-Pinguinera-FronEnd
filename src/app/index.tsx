import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

export const App = (): ReactElement => {
  return (
    <RouterProvider router={router} />
  );
};