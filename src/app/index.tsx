import { ReactElement } from 'react';
import './ui/styles/global.css';
import './ui/styles/normalize.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

export const App = (): ReactElement => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};