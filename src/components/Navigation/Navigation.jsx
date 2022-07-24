import React from 'react';
import Container from '../Container/Container';
import NavList from '../NavList/NavList';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import styles from './Navigation.module.css';

export default function Navigation({ items }) {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Logo />
        <NavList pages={items} />

        <div className={styles.container}>
          <Button type="search" />
          <Button type="menu" />
        </div>
      </div>
    </Container>
  );
}
