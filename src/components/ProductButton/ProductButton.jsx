import React from 'react';
import styles from './ProductButton.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as ShareIcon } from '../../assets/images/share.svg';

export default function ProductButton({ type, onClick }) {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      {type === 'share' && <ShareIcon className={styles.icon} />}
    </button>
  );
}

ProductButton.propTypes = {
  type: PropTypes.oneOf(['favorite', 'share']).isRequired,
  onClick: PropTypes.func,
};
