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
        className={styles.user__details + ' flex center a__rem__gap inner__gap'}
      >
        <IoNotificationsSharp className={styles.notice} />
        <img
          src={
            'https://th.bing.com/th/id/R.a0045d5d3a218f82448ad164cb7a5e7a?rik=US3eWTCrN1gi2A&riu=http%3a%2f%2fst1.bgr.in%2fwp-content%2fuploads%2f2016%2f09%2felon-musk-space-x-getty.jpg&ehk=fFBYPE%2fw47EkU9E9asbbZM5WBYqthAhP7VrUwRI9Vmk%3d&risl=&pid=ImgRaw&r=0'
          }
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
