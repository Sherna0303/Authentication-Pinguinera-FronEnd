import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../ui/layouts/auth-layout';
import { RegisterPage } from '../pages/register.page';
import { LoginPage } from '../pages/login.page';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
