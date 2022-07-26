import React from 'react';
import ClientList from '../ClientList/ClientList';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import styles from './ClientsSection.module.css';
import { roundNumber } from '../../helpers/roundNumber';

export default function ClientsSection({ items, isMobile, totalClients }) {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>
            Trusted by {roundNumber(totalClients)}+ companies
          </h2>
        </div>
        <div className={styles.listWrapper}>
          <ClientList items={items} isMobile={isMobile} />
        </div>
      </div>
    </Container>
  );
}

ClientsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      mobileImageURL: PropTypes.string.isRequired,
    })
  ),
  isMobile: PropTypes.bool,
  totalClients: PropTypes.string.isRequired,
};
