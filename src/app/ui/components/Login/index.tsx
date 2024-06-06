import { ReactElement } from 'react';

import './style.css';
import { Link } from 'react-router-dom';

const Login = (): ReactElement => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // // const { authenticate, errorMessage } = useAuthLogin();

  // const handleSubmit = (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   // authenticate(email, password);
  // };

  return (
    <>
      <main className="auth authLogin">
        <form className="auth__form">
          <fieldset className="auth__fieldset">
            <legend className="auth__legend">Iniciar sesión</legend>
            <label className="auth__label" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="auth__input"
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
            />
            <label className="auth__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="auth__input"
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
            <button className="auth__button auth__button--primary" type="submit">
              Iniciar sesión
            </button>

            <p>¿No tienes una cuenta? <Link to='/register' className="auth__register-link">Regístrate</Link></p>

          </fieldset>
        </form>
      </main>

    </>
  );
};

export default Login;