import React from 'react';
import ProductOrder from '../../features/ProductOrder/ProductOrder';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './Order.module.scss';

const Order = () => {
  return (
    <div className={styles.root}>
      <SectionHeader name='Zamówienie' />
      <div className={styles.order}>
        <ProductOrder />
      </div>
    </div>
  );
};

export default Order;
