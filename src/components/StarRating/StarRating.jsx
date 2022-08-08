import React, { useMemo, useState } from 'react';
import { ReactComponent as StarIcon } from '../../assets/images/star.svg';
import styles from './StarRating.module.css';
import throttle from 'lodash.throttle';
import PropTypes from 'prop-types';

export default function StarRating({
  handleSetRating = () => {},
  rating,
  isReadOnly,
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const choseRating =
    isMouseOver && !isReadOnly ? hoverRating : (rating / 5) * 200;

  const starsActiveWrapperWidth = (rating) => {
    const width = (rating / 200).toPrecision(1) * 100;
    let countWidth = 0;
    if (width < 10) {
      countWidth = width < 7 ? 0 : 10;
    } else if ((width / 10) % 2 === 1) {
      countWidth = width;
    } else {
      countWidth = width;
    }
    return `${countWidth}%`;
  };

  const mouseOverHandler = useMemo(() => {
    const throttled = throttle((e) => {
      const { layerX } = e.nativeEvent;
      setHoverRating(layerX);
    }, 100);
    return (e) => {
      e.persist();
      return throttled(e);
    };
  }, []);

  return (
    <div className={styles.ratingWrapper}>
      <div
        className={styles.starsWrapper}
        onMouseOver={mouseOverHandler}
        onClick={(e) => {
          handleSetRating(e.nativeEvent.layerX);
        }}
        onMouseEnter={() => {
          setIsMouseOver(true);
        }}
        onMouseLeave={() => {
          setIsMouseOver(false);
        }}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <StarIcon key={index} className={styles.icon} fill="none" />
        ))}
      </div>
      <div
        className={styles.starsActiveWrapper}
        style={{
          width: starsActiveWrapperWidth(choseRating),
        }}
      >
        <div style={{ display: 'flex' }}>
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon key={index} className={styles.activeIcon} fill="orange" />
          ))}
        </div>
      </div>
    </div>
  );
}

StarRating.propTypes = {
  handleSetRating: PropTypes.func,
  rating: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool,
};
