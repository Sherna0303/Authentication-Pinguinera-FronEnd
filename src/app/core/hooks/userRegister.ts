import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerService } from '../services/register.service';

export const useRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  
  const register = (name: string, email: string, password: string) => {
    registerService({ username: name, email, password })
      .then((AuthenticatedResponse) => {
        const responseHandlers: { [key: number]: () => void } = {
          200: () => navigate('/'),
          400: () => setError('El correo electrónico ya está registrado'),
          500: () => setError('Error interno en el servidor'),
        };
        
        const handleResponse = responseHandlers[AuthenticatedResponse] || (() => setError('Error desconocido'));
        handleResponse();        
      });
  };
  
  return { register, error };
};