import React from 'react';
import styles from './OrderSingleView.module.scss';
import PropTypes from 'prop-types';

const OrderSingleView = ({order}) => {
  const {idOrder, priceSingle, user, cartData} = order[0];
  return (
    <div className={styles.root}>
      <div>
        <h1>{idOrder}</h1>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.Mobile}</p>
        <p>{user.Email}</p>
      </div>
    </div>
  );
};

OrderSingleView.propTypes = {
  order: PropTypes.string.isRequired,
};

export default OrderSingleView;
