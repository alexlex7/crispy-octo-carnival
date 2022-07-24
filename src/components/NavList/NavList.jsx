import React from 'react';
import styles from './NavList.module.css';
import NavListItem from '../NavListItem/NavListItem';

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
