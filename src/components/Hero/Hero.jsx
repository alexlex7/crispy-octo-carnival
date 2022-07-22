import React from 'react';
import Container from '../Container/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section>
      <Container classNames={styles.container}>
        <h1 className={styles.title}>We Help You Make Modern Furniture</h1>
        <p className={styles.text}>
          All of our furniture uses the best materials and <br /> choices for
          our customers.All of our furniture <br /> uses the best materials
        </p>
        <button type="button" className={styles.btn}>
          Explore More
        </button>
      </Container>
    </section>
  );
}
