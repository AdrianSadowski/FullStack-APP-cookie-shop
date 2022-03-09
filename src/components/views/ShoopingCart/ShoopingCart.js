import React from 'react';
import Button from '../../features/Button/Button';
import ShoopingCartProduct from '../../features/ShoopingCartProduct/ShoopingCartProduct';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './ShoopingCart.module.scss';

const ShoopingCart = () => {
  const productsData = [
    {
      id: '1',
      title: 'Gryzak Czyszczący zęby',
      priceSingle: 25,
      amount: 1,
      image: '../assets/gryzak-czyszczacy-zeby.jpg',
    },
    {
      id: '2',
      title: 'Piłka dla psa',
      priceSingle: 231,
      amount: 3,
      image: '../assets/dog-ball.jpg',
    },
    {
      id: '3',
      title: 'Gumowy kurcza',
      priceSingle: 32,
      amount: 2,
      image: '../assets/Gumowy-kurczak.jpg',
    },
  ];
  return (
    <div className={styles.root}>
      <SectionHeader name="Koszyk" />
      <div className={styles.cart}>
        <div className={styles.cartProducts}>
          {productsData.map((product, index) => (
            <ShoopingCartProduct key={index} {...product} />
          ))}
        </div>
        <div className={styles.cartSummary}>
          <h3>Twój koszyk</h3>
          <p className={styles.cartSummary_price}>
            Całkowita wartość koszyka:
            <span> 165 PLN </span>
          </p>
          <Button name="Zamów" className={styles.cardButton} />
        </div>
      </div>
    </div>
  );
};

export default ShoopingCart;
