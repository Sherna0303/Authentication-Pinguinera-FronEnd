import { ReactElement } from 'react';
import './style.css';
import { FormLogin } from '../../forms/login';

const LoginComponent = (): ReactElement => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // // const { authenticate, errorMessage } = useAuthLogin();

  // const handleSubmit = (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   // authenticate(email, password);
  // };

  return (
    <main className="auth authLogin">
      <FormLogin />
    </main>
  );
};

export default LoginComponent;