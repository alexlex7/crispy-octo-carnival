import React from 'react';
import styles from './CarouselItem.module.css';
import PropTypes from 'prop-types';

export default function CarouselItem({ children, width }) {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
};
