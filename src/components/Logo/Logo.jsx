import React from 'react';
import styles from './Logo.module.css';

const defaultURL = 'http://localhost:3000/';

export default function Logo({ text = 'DudeShape', logoURL = defaultURL }) {
  return (
    <a className={styles.logo} href={logoURL}>
      {text}
    </a>
  );
}
