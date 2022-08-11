import React from 'react';
import styles from './NavListItem.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export default function NavListItem({ to, text }) {
  return (
    <li className={styles.listItem}>
      {/* <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        {text}
      </NavLink> */}
      <Link
        className={styles.item}
        to={to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        // onSetActive={this.handleSetActive}
      >
        {text}
      </Link>
    </li>
  );
}

NavListItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
