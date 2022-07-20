import React from 'react';
import styles from './Container.module.css';

export default function Container({ classNames = '', children }) {
  return <div className={`${styles.container} ${classNames}`}>{children}</div>;
}
