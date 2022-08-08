import React from 'react';
import styles from './FeedbackList.module.css';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

export default function FeedbackList({ items }) {
  return (
    <Container>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <FeedbackItem key={idx} item={item} />
        ))}
      </ul>
    </Container>
  );
}

FeedbackList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      feedback: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
