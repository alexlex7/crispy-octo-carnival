import React from 'react';
import styles from './Conteiner.module.css';

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
