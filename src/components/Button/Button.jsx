import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../assets/images/searchIcon.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { ReactComponent as MobileMenuIcon } from '../../assets/images/mobileMenuIcon.svg';

export default function Button({ type, onClick }) {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      {type === 'search' && <SearchIcon className={styles.icon} />}
      {type === 'menu' && <MenuIcon className={styles.icon} />}
      {type === 'mobile menu' && <MobileMenuIcon className={styles.icon} />}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['search', 'menu', 'mobile menu']).isRequired,
  onClick: PropTypes.func,
};
