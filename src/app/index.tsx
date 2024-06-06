import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { AppProvider } from './core/state/AppContext';

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};