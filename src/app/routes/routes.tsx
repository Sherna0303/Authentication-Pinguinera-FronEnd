import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../ui/layouts/auth-layout';
import { RegisterPage } from '../pages/register.page';
import { LoginPage } from '../pages/login.page';

export const router = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [
      {
        path:'',
        element:
          <LoginPage/>
      },
      {
        path: 'login',
        element: 
              <LoginPage/>
      },
      {
        path: 'register',
        element: 
              <RegisterPage/>
      },
    ]
  },
]);