import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInAdministratorMutation } from '../api/apiSlice';
import { setToken } from '../utilities/Utilities';

function Login() {
  const navigate = useNavigate();
  const [signInAdministrator, { isLoading, error }] =
    useSignInAdministratorMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (trimmedEmail && password) {
      const response = await signInAdministrator({
        administrator: { email: trimmedEmail, password },
      })
        .unwrap()
        .catch((error) => console.log(error));

      if (response) {
        const { token, data } = response;
        setToken(token);
        data.role === 'admin' && navigate('/admin', {state: data});
        data.role === 'teacher' && navigate('/teacher', {state: data});
        data.role === 'parent' && navigate('/parent', {state: data});
      }
      setEmail('');
      setPassword('');
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          required
          onChange={handleEmail}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          required
          onChange={handlePassword}
          value={password}
        />
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <div>Failed to log in: {error.message}</div>}
    </div>
  );
}

export default Login;
