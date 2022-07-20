import React from 'react';
import styles from './Header.module.css';
import Container from '../Container/Container';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 589 });

  return (
    <header className={styles.header}>
      <Container classNames={styles.container}>
        <div className={styles.logo}>DudeShape</div>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <nav>
            <ul className={styles.list}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
