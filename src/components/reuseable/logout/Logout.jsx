import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignOutAdministratorMutation } from '../../api/apiSlice';
import { getToken, clearToken } from '../../utilities/Utilities';

import { IoLogOutOutline } from 'react-icons/io5';
import styles from './Logout.module.css';

function Logout() {
  const navigate = useNavigate();
  const [signOutAdministrator, { isLoading }] =
    useSignOutAdministratorMutation();

  const handleLogOut = async () => {
    const token = getToken();
    await signOutAdministrator({ headers: { Authorization: token } })
      .unwrap()
      .then(() => {
        clearToken();
        navigate('/login');
      })
      .catch((error) => error.message);
  };

  return (
    <button
      type='button'
      className={styles.log__out}
      disabled={isLoading}
      onClick={handleLogOut}
    >
      {isLoading ? 'logging out...' : <IoLogOutOutline className={styles.logout__sign} />}
    </button>
  );
}

export default Logout