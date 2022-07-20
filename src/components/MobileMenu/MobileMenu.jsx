import React from 'react';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  return (
    <div className={styles.menuWrap}>
      <input type="checkbox" className={styles.toggler} />
      <div className={styles.hamburger}>
        <div></div>
      </div>
      <div className={styles.menu}>
        <div>
          <div>
            <ul>
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
          </div>
        </div>
      </div>
    </div>
  );
}
