import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import FeatureList from '../FeatureList/FeatureList';
import styles from './AboutSection.module.css';

export default function AboutSection({ data }) {
  const { title, description, imageURL, mobileImageURL, features } = data;
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.thumb}>
          <div className={styles.imageWrapper}>
            <img
              srcSet={`${mobileImageURL} 332w, ${imageURL} 596w`}
              sizes="(min-width: 1205px) 596px, (max-width: 1204px) 332px, 332px)"
              src={mobileImageURL}
              alt="furniture"
              title="furniture"
            />
          </div>
        </div>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{description}</p>
          <FeatureList items={features} />
        </div>
      </div>
    </Container>
  );
}

AboutSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    mobileImageURL: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        mobileImageURL: PropTypes.string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};
