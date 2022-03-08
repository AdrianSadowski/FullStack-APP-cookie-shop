import React from 'react';
import Button from '../../features/Button/Button';
import ShoopingCartProduct from '../../features/ShoopingCartProduct/ShoopingCartProduct';
import styles from './ShoopingCart.module.scss';

const ShoopingCart = () => {
  const productData = {
    id: '1',
    title: 'Gryzak Czyszczący zęby',
    priceSingle: 25,
    amount: 2,
    image: 'assets/gryzak-czyszczacy-zeby.jpg',
  };
  return (
    <div className={styles.root}>
      <div className={styles.cartProducts}>
        <ShoopingCartProduct {...productData} />
      </div>
      <div className={styles.cartSummary}>
        <h3>Twój koszyk</h3>
        <p>
          Całkowita wartość koszyka: 
          <span>$ 165</span>
        </p>
        <Button name="Zamów" className={styles.cardButton} />
      </div>
    </div>
  );
};

export default ShoopingCart;
