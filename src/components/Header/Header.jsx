import React, { useState } from 'react';
import styles from './Header.module.css';
import Container from '../Container/Container';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as SearchIcon } from './images/searchIcon.svg';
import { ReactComponent as MenuIcon } from './images/menu.svg';
import { ReactComponent as MobileMenuIcon } from './images/mobileMenuIcon.svg';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1204 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  return (
    <header className={styles.header}>
      <Container classNames={styles.container}>
        <div className={styles.logoWrapper}>
          <a className={styles.logo} href="#">
            DudeShape
          </a>
        </div>
        {isMobile ? (
          <div className={styles.menu}>
            <button
              type="button"
              onClick={toggleMenu}
              className={styles.menuBtn}
            >
              <MobileMenuIcon className={styles.mobileMenuIcon} />
            </button>
            {isMenuOpen && (
              <div className={styles.dropOut}>
                <ul className={styles.dropOutList}>
                  <li>
                    <a href="#" className={styles.dropOutLink}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropOutLink}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropOutLink}>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropOutLink}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropOutLink}>
                      Search
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
