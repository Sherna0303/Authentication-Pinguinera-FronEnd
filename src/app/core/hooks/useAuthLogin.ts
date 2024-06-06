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
      const token = response;
      if (token) {
        //const decodedToken = jwtDecode(token) as { [key: string]: DecodedToken };
        //const token = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'];
        Swal.fire({
          icon: 'success',
          title: 'Formulario enviado',
          text: 'El formulario se ha enviado correctamente.',
        });
        navigateTo('/home/' + token);
      } else {
        alert('Las credenciales proporcionadas son incorrectas.');
      }
    });
  return { authenticate };
};