import React, { useState, useEffect, useContext } from 'react';
import Container from '../Container/Container';
import NavList from '../NavList/NavList';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useMediaQuery } from 'react-responsive';
import styles from './Navigation.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as FavoriteIcon } from '../../assets/images/heart.svg';

export default function Navigation({ items, products = [] }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1204 });

  useEffect(() => {
    setIsOpenMenu(!isMobile);
  }, [isMobile]);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const totalFavorite = products.filter(
    (item) => item.isFavorite === true
  ).length;

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        {isOpenMenu && (
          <div className={styles.navWrapper}>
            <NavList pages={items} />

            <div className={styles.container}>
              <div className={styles.favoriteWrapper}>
                <FavoriteIcon className={styles.favoriteIcon} />
                <p className={styles.favoriteText}>
                  {totalFavorite === 0 ? '' : totalFavorite}
                </p>
              </div>
              <Button type="search" />
              <Button type="menu" />
            </div>
          </div>
        )}
        {isMobile && <Button type="mobile menu" onClick={handleClickMenu} />}
      </div>
    </Container>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};
