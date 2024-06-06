import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './core/state/AppContext';
import { router } from './routes/routes';
import './ui/styles/global.css';

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};