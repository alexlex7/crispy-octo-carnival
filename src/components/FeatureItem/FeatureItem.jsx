import React from 'react';
import styles from './FeatureItem.module.css';
import PropTypes from 'prop-types';

export default function FeatureItem({ item }) {
  const { title, text, imageURL, mobileImageURL } = item;
  return (
    <li className={styles.listItem}>
      <div className={styles.thumb}>
        <img
          srcSet={`${mobileImageURL} 28w, ${imageURL} 50w`}
          sizes="(min-width: 1205px) 50px, (max-width: 1204px) 28px, 28px)"
          src={mobileImageURL}
          alt={title}
          title={title}
        />
      </div>
      <div>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
}

FeatureItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    mobileImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
