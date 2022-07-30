import React from 'react';
import styles from './ClientItem.module.css';
import PropTypes from 'prop-types';

export default function ClientItem({ client, isMobile = false }) {
  const { name, imageURL, mobileImageURL } = client;

  return (
    <li className={styles.listItem}>
      <img src={isMobile ? mobileImageURL : imageURL} alt={name} title={name} />
    </li>
  );
}

ClientItem.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    mobileImageURL: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool,
};
