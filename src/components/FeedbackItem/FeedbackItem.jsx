import React from 'react';
import styles from './FeedbackItem.module.css';
import PropTypes from 'prop-types';
import StarRating from '../StarRating/StarRating';

export default function FeedbackItem({ item }) {
  const { firstName, feedback, rating } = item;
  return (
    <li className={styles.item}>
      <p className={styles.name}>{firstName}</p>
      <div className={styles.wrapper}>
        <StarRating rating={rating} isReadOnly={true} />
        <p>{rating}</p>
      </div>
      <p className={styles.text}>{feedback}</p>
    </li>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
