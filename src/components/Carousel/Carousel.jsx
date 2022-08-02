import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { ReactComponent as NextIcon } from '../../assets/images/next.svg';
import { ReactComponent as PrevIcon } from '../../assets/images/prev.svg';

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= Math.ceil(React.Children.count(children) / 3)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              width: '380px',
            });
          })}
        </div>
      </div>
      <div className={styles.indicators}>
        <button
          className={styles.btn}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          disabled={activeIndex === 0}
        >
          <PrevIcon className={styles.icon} />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          disabled={
            activeIndex === Math.ceil(React.Children.count(children) / 3 - 1)
          }
        >
          <NextIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
