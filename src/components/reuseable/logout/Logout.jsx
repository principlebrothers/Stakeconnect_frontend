import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useLogOut } from '../../utilities/Utilities';
import Modal from '../model/Modal';

import styles from './Logout.module.css';

function Logout() {
  const {
    handleLogOut, isLoading, modal, setModal,
  } = useLogOut();

  return (
    <>
      <button
        type="button"
        className={styles.log__out}
        disabled={isLoading}
        onClick={handleLogOut}
      >
        {isLoading ? (
          'logging out...'
        ) : (
          <IoLogOutOutline className={styles.logout__sign} />
        )}
      </button>
      {modal.isError && (
        <Modal
          message={modal.message}
          type={modal.type}
          onClose={() => setModal({ isError: false, message: '', type: '' })}
        />
      )}
    </>
  );
}

export default Logout;
