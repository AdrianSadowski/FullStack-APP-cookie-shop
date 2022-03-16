import React from 'react';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './OrderSingle.module.scss';

const OrderSingle = () => {
  return (
    <div className={styles.root}>
      <SectionHeader name='Zamówienie id: ' />
      <div className={styles.order}>
        <h1>title</h1>
      </div>
    </div>
  );
};

export default OrderSingle;
