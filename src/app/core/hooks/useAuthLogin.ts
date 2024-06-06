import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
import { authServiceLogin } from '../services/login.service';
import { useContext, useState } from 'react';
import { AppContext } from '../state/AppContext';

interface DecodedToken {
  sub: string; // Asunto del token (Subject)
  exp: number; // Fecha de expiración (Expiration Time)
  iat: number; // Fecha de emisión (Issued At Time)
  toke: string; // Token
  // Agrega aquí otras propiedades que esperas en el token decodificado
}

export const useAuthLogin = () => {

  const [error, setError] = useState<string>();
  const { dispatch } = useContext(AppContext);

  const navigateTo = useNavigate();

 
  const authenticate = (email: string, password: string) => authServiceLogin({ Email: email, Password: password })
    .then((response) => {
      switch (response.statusCode) {
      case 400:
        dispatch({type:'ERROR_CHANGED', payload: 'Credenciales inválidas'});
        break;
      case 500:
        dispatch({type:'ERROR_CHANGED', payload: 'Ha ocurrido un error en el servidor'});        
        break;
      case 200:
        dispatch({type:'ERROR_CHANGED', payload: ''});
        alert('Se ha iniciado correctamente sesión');
        navigateTo('/home/'+response.token);
      }

    });
  return { authenticate,error,setError};
};