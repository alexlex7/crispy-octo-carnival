import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';
import ProductButton from '../ProductButton/ProductButton';
import { ReactComponent as FavoriteIcon } from '../../assets/images/heart.svg';

export default function ProductItem({ item, handleFavorite }) {
  const { id, name, price, imageURL, isFavorite } = item;

  const handleChange = (e) => {
    handleFavorite(id, e.target.checked);
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.thumb}>
        <img src={imageURL} alt={name} title={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>{name}</p>
          <div className={styles.btnWrapper}>
            <label className={isFavorite ? styles.labelActive : styles.label}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={isFavorite}
                onChange={handleChange}
              />
              <FavoriteIcon className={isFavorite ? styles.icon : ''} />
            </label>
            <ProductButton type="share" />
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.price}>${price}</p>
          <button className={styles.btn} type="button">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  handleFavorite: PropTypes.func,
};
