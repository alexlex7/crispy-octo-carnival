import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './FeatureList.module.css';
import PropTypes from 'prop-types';

export default function FeatureList({ items }) {
  return (
    <ul className={styles.list}>
      {items.slice(0, 3).map((item, idx) => (
        <FeatureItem key={idx} item={item} />
      ))}
    </ul>
  );
}

FeatureList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      mobileImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
};
