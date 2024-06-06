import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerService } from '../services/register.service';

export const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  
  const register = (name: string, email: string, password: string) => {
    registerService({ name, email, password })
      .then((isAuthenticated) => {
        if (isAuthenticated) {
          navigate('/');
        } else {
          setError('Could not register');
        }
      });
  };
  
  return { register, error };
};