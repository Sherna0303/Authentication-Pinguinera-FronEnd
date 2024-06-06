import { Link } from 'react-router-dom';
import { FormEvent, ReactElement, useState } from 'react';
import { Label } from '../../elements/Label';
import './style.css';

export const FormLogin = (): ReactElement => {

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Enviando formulario');
    // if (!username || !email || !password || !repeatPassword || password.length < 8 || password !== repeatPassword || username.length < 3 || !isValidEmail(email)) {
    //   return;
    // }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isValidEmail(email)) {
      setEmailError('Introduzca una dirección de correo electrónico válida');
    } else {
      setEmailError(null);
    }
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (password.length < 1) {
      setPasswordError('La contraseña no puede estar vacía');
    }
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError(null);
    }
  };


  return (
    <main className="auth authLogin">
      <form onSubmit={handleSubmit} className="auth__form">
  
        <fieldset className="auth__fieldset">

          <legend className="auth__legend">Iniciar sesión</legend>

          <Label classNameLabel='auth__label'
            classNameSpan='auth__span'
            classNameInput={`auth__input ${emailError ? 'error' : ''}`}
            nameInput='name' 
            type='email'
            text='Correo electronico'
            placeHolder='Ingresa tu correo electrónico'
            onChange={handleEmailChange}
          />

          <Label classNameLabel='auth__label'
            classNameSpan='auth__span'
            classNameInput={`auth__input ${passwordError ? 'error' : ''}`}
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

        </fieldset>
      </form>
    </main>
  );
};