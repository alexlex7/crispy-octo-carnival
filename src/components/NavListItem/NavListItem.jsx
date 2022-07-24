import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavListItem.module.css';
import PropTypes from 'prop-types';

export default function NavListItem({ to, text }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : styles.item)}
      >
        {text}
      </NavLink>
    </li>
  );
}

NavListItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
