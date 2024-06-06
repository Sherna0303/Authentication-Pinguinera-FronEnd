import { Link } from 'react-router-dom';
import { Label } from '../../elements/Label';
import './style.css';
import { useState } from 'react';

interface LoginProps {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormLogin: React.FC<LoginProps> = ({ handleSubmit }: LoginProps) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isValidEmail(email)) {
      setError('Introduzca una dirección de correo electrónico válida');
    } else {
      setError('');
    }
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (password.length < 1) {
      setError('La contraseña no puede estar vacía');
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setError('');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="auth__form">

      <fieldset className="auth__fieldset">

        <legend className="auth__legend">Iniciar sesión</legend>

        <Label classNameLabel='auth__label'
          classNameSpan='auth__span'
          classNameInput={'auth__input'}
          nameInput='name'
          type='email'
          text='Correo electronico'
          placeHolder='Ingresa tu correo electrónico'
          onChange={handleEmailChange}
        />

        <Label classNameLabel='auth__label'
          classNameSpan='auth__span'
          classNameInput={'auth__input'}
          nameInput='name'
          type='password'
          text='Contraseña'
          placeHolder='Ingresa tu contraseña'
          onChange={handlePasswordChange}
        />

        <button className="auth__button auth__button--primary" type="submit">
          Iniciar sesión
        </button>

        <p>¿No tienes una cuenta? <Link to='/register' className="auth__register-link">Regístrate</Link></p>
        {error && <p className="auth__error">{error}</p>}
      </fieldset>
    </form>
  );
};


export default FormLogin;