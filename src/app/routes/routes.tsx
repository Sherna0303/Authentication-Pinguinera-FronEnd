import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../ui/layouts/auth-layout';
import { RegisterPage } from '../pages/register.page';

export const router = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [
      {
        
      },
      {
        path: 'register',
        element: 
              <RegisterPage/>
      },
    ]
  },
]);