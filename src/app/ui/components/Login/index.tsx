import { ReactElement, useContext } from 'react';
import './style.css';
import FormLogin from '../../forms/Login';
import { AppContext } from '../../../core/state/AppContext';
import { useAuthLogin } from '../../../core/hooks/useAuthLogin';

const LoginComponent = (): ReactElement => {

  const { dispatch } = useContext(AppContext);
  const { authenticate,} = useAuthLogin();
  const { state } = useContext(AppContext);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const emailUser = state.email;
    const passwordUser = state.password;

    if (emailUser.length<1 || passwordUser.length<1) {
      dispatch({type:'ERROR_CHANGED', payload: 'Verifica que los dato ingresados sean los correctos'});

    }
    else {
      await authenticate(emailUser, passwordUser);
    }
  };


  return (
    <main className="auth authLogin">
      <FormLogin handleSubmit={handleSubmit}  />
    </main>
  );
};

export default LoginComponent;