import React from 'react';
import Container from '../Container/Container';
import Carousel from '../Carousel/Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import ProductItem from '../ProductItem/ProductItem';
import PropTypes from 'prop-types';
import styles from './Products.module.css';

export default function Products({ products, handleFavorite }) {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Popular Furniture</h2>
        <p className={styles.text}>
          All of our furniture uses the best materials and choices for our
          customers. All of our furniture uses the best materials and choices
          for our customers.
        </p>
        <Carousel>
          {products.map((item) => (
            <CarouselItem key={item.id}>
              <ProductItem item={item} handleFavorite={handleFavorite} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageURL: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  handleFavorite: PropTypes.func,
};
