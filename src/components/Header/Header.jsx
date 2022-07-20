import React from 'react';
import styles from './Header.module.css';
import Container from '../Container/Container';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from '../MobileMenu/MobileMenu';
import { ReactComponent as SearchIcon } from './images/searchIcon.svg';
import { ReactComponent as MenuIcon } from './images/menu.svg';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1204 });

  return (
    <header className={styles.header}>
      <Container classNames={styles.container}>
        <div className={styles.logoWrapper}>
          <a className={styles.logo} href="#">
            DudeShape
          </a>
        </div>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <nav>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a href="#" className={styles.navLink}>
                    Home
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="#" className={styles.navLink}>
                    About
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="#" className={styles.navLink}>
                    Features
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a href="#" className={styles.navLink}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.wrapper}>
              <button className={styles.btn} type="button">
                <SearchIcon className={styles.icon} />
              </button>
              <button className={styles.btn} type="button">
                <MenuIcon className={styles.icon} />
              </button>
            </div>
          </>
        )}
      </Container>
    </header>
  );
}
