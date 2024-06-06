import { ReactElement, useContext } from 'react';
import './style.css';
import FormLogin from '../../forms/login';
import { AppContext } from '../../../core/state/AppContext';
import Swal from 'sweetalert2';
import { useAuthLogin } from '../../../core/hooks/useAuthLogin';

const LoginComponent = (): ReactElement => {

  const { authenticate} = useAuthLogin();
  const { state } = useContext(AppContext);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const emailUser = state.email;
    const passwordUser = state.password;

    if (emailUser.length<1 || passwordUser.length<1) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Incorrectos',
        text: 'Verifica que los dato ingresados sean los correctos',
      });
      return;
    }
    else {
      await authenticate(emailUser, passwordUser);
    }
  };


  return (
    <main className="auth authLogin">
      <FormLogin handleSubmit={handleSubmit} />
    </main>
  );
};

export default LoginComponent;