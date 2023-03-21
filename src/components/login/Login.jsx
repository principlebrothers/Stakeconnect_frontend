import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInAdministratorMutation } from '../api/apiSlice';
import { setToken } from '../utilities/Utilities';
import styles from './Login.module.css';
import login from '../../assets/login.jpg';
import Modal from '../reuseable/model/Modal';

function Login() {
  const navigate = useNavigate();
  const [signInAdministrator, { isLoading }] = useSignInAdministratorMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState({ isError: false, message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (trimmedEmail && password) {
      const response = await signInAdministrator({
        administrator: { email: trimmedEmail, password },
      })
        .unwrap()
        .catch((error) =>
          setModal({ isError: true, message: error.data, type: 'error' })
        );

      if (response) {
        const { token, data } = response;
        setToken(token);
        if (data.role === 'admin') {
          navigate('/admin', { state: data });
        } else if (data.role === 'teacher') {
          navigate('/teacher', { state: data });
        } else if (data.role === 'parent') {
          navigate('/parent', { state: data });
        }
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
    <section className={styles.background}>
      <div className={styles.login__container}>
        <div className={styles.left_side}>
          <img src={login} alt='login' width='1024px' height='844px' />
        </div>
        <div className={styles.right__side}>
          <h2 className='large__font__size__bold'>You&apos;re Welcome!</h2>
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
            <button
              type='submit'
              className='general__button'
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#'>Forgot password</a>
          </form>
          {modal.isError && (
            <Modal
              message={modal.message}
              type={modal.type}
              onClose={() =>
                setModal({ isError: false, message: '', type: '' })
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
