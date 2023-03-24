import React from 'react';
import { useLogOut } from '../../utilities/Utilities';

import { IoLogOutOutline } from 'react-icons/io5';
import styles from './Logout.module.css';

function Logout() {
  const { handleLogOut, isLoading } = useLogOut();

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