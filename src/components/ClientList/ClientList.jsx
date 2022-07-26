import React from 'react';
import ClientItem from '../ClientItem/ClientItem';
import styles from './ClientList.module.css';
import PropTypes from 'prop-types';

export default function ClientList({ items, isMobile = false }) {
  const clients = isMobile ? items.slice(0, 5) : items.slice(0, 6);
  // console.log(cli
  return (
    <ul className={isMobile ? styles.mobileList : styles.desktopList}>
      {clients.map((client) => (
        <ClientItem key={client.id} client={client} isMobile={isMobile} />
      ))}
    </ul>
  );
}

ClientList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      mobileImageURL: PropTypes.string.isRequired,
    })
  ),
  isMobile: PropTypes.bool,
};
