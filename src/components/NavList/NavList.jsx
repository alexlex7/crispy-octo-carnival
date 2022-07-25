import React from 'react';
import styles from './NavList.module.css';
import NavListItem from '../NavListItem/NavListItem';
import PropTypes from 'prop-types';

export default function NavList({ pages }) {
  return (
    <nav>
      <ul className={styles.list}>
        {pages.map(({ text, to }) => (
          <NavListItem key={text} text={text} to={to} />
        ))}
      </ul>
    </nav>
  );
}

NavList.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};
