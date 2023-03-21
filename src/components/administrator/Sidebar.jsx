import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../utilities/Utilities';
import { IoSchoolSharp } from 'react-icons/io5';
import { icons } from '../utilities/Utilities';
import styles from './Sidebar.module.css';

function Sidebar() {

  return (
    <>
      <aside className={styles.side__menu}>
        <div className={styles.logo__container + ' centre'}>
          <IoSchoolSharp className={styles.logo__icon + ' app__name'} />
          <h1 className='app__name'>Genius</h1>
        </div>
        <div className='menu__container'>
          <ul>
            {menus.map((menu, index) => (
              <li key={menu}>
                <Link to={`/${menu}`} className='flex small__font__size__bold'>
                  {React.createElement(icons[index], {
                    className: styles.icon,
                  })}
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;