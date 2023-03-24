import React from 'react';
import { IoSearch, IoNotificationsSharp } from 'react-icons/io5';
import Logout from '../reuseable/logout/Logout';
import styles from './Header.module.css';

function Header({ image, name, email }) {
  return (
    <nav className={styles.navbar}>
      <form className={styles.search}>
        <input type='text' placeholder='Search...' />
        <button type='submit'>
          <IoSearch className={styles.search__icon} />
        </button>
      </form>
      <div
        className={styles.user__details}
      >
        <IoNotificationsSharp className={styles.notice} />
        <img
          src={image}
          alt='user'
          className={styles.img}
          width='45px'
          height='45px'
        />
        <div className={styles.user__info}>
          <div className='smaller__font__size'>{name}</div>
          <div className='smaller__font__size'>{email}</div>
          <Logout />
        </div>
      </div>
    </nav>
  );
}

export default Header;
