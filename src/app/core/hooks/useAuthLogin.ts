import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
import { authServiceLogin } from '../services/login.service';
import Swal from 'sweetalert2';

interface DecodedToken {
  sub: string; // Asunto del token (Subject)
  exp: number; // Fecha de expiración (Expiration Time)
  iat: number; // Fecha de emisión (Issued At Time)
  toke: string; // Token
  // Agrega aquí otras propiedades que esperas en el token decodificado
}

export const useAuthLogin = () => {

  const navigateTo = useNavigate();

  const authenticate = (email: string, password: string) => authServiceLogin({ Email: email, Password: password })
    .then((response) => {
      switch (response.statusCode) {
      case 400:
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Credenciales inválidas',
        });
        break;

      case 500:
        Swal.fire({
          icon: 'error',
          title: 'Error del servidor',
          text: 'Ha ocurrido un error en el servidor',
        });
        break;
      case 200:
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Has iniciado sesión correctamente',
        });
        navigateTo('/home/'+response.token);

      }

    });
  return { authenticate };
};