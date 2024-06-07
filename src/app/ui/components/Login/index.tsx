import { ReactElement, useContext } from 'react';
import './style.css';
import { AppContext } from '../../../core/state/AppContext';
import { useAuthLogin } from '../../../core/hooks/useAuthLogin';
import FormLogin from '../../forms/Login';

const LoginComponent = (): ReactElement => {

  const { dispatch } = useContext(AppContext);
  const { login} = useAuthLogin();
  const { state } = useContext(AppContext);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const emailUser = state.email;
    const passwordUser = state.password;

    if (emailUser.length<1 || passwordUser.length<1) {
      dispatch({type:'ERROR_CHANGED', payload: 'Verifica que los dato ingresados sean los correctos'});

    }
    else {
      await login(emailUser, passwordUser);
    }
  };


  return (
    <main className="auth authLogin">
      <FormLogin handleSubmit={handleSubmit}  />
    </main>
  );
};

export default LoginComponent;