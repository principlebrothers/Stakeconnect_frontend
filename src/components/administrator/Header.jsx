import React, { useEffect, useState } from 'react';
import { IoSearch, IoNotificationsSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import Logout from '../reuseable/logout/Logout';

import styles from './Header.module.css';

function Header({ image, name, email }) {
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (infoVisible) {
      timeoutId = setTimeout(() => {
        setInfoVisible(false);
      }, 60000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [infoVisible]);

  const handleContainerClick = () => {
    setInfoVisible(true);
  };

  const handleLogoutClick = () => {
    setInfoVisible(false);
  };


  return (
    <nav className={styles.navbar}>
      <form className={styles.search}>
        <input type='text' placeholder='Search...' />
        <button type='submit'>
          <IoSearch className={styles.search__icon} />
        </button>
      </form>
      <div className={styles.user__details}>
        <IoNotificationsSharp className={styles.notice} />
        <div
          className={styles.user__details__container}
          onClick={handleContainerClick}
        >
          <img
            src={image}
            alt='user'
            className={styles.img}
            width='45px'
            height='45px'
          />
          <div
            className={`${styles.user__info} ${
              infoVisible ? styles.active : ''
            }`}
          >
            <div className='smaller__font__size'>{name}</div>
            <div className='smaller__font__size'>{email}</div>
            <Logout onClick={handleLogoutClick} />
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Header;
