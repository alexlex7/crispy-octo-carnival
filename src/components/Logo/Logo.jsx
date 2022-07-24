import React from 'react';
import styles from './Logo.module.css';
import PropTypes from 'prop-types';

export default function Logo({ text }) {
  return <p className={styles.logo}>{text}</p>;
}

Logo.propTypes = {
  text: PropTypes.string,
};

Logo.defaultProps = {
  text: 'DudeShape',
};
