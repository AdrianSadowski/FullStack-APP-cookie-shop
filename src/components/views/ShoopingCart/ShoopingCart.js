import React, {useEffect, useState} from 'react';
import Button from '../../features/Button/Button';
import ShoopingCartProduct from '../../features/ShoopingCartProduct/ShoopingCartProduct';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './ShoopingCart.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCart, removeFromCart} from '../../../redux/productsRedux';
import {Link} from 'react-router-dom';

const ShoopingCart = () => {
  const cartData = useSelector(state => getAllCart(state));
  const dispatch = useDispatch();
  const removeCartItem = productId => dispatch(removeFromCart(productId));

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartData.forEach(item => {
      items += item.amount;
      price += item.amount * item.priceSingle;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cartData, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  return (
    <div className={styles.root}>
      <SectionHeader name="Your Shopping Basket" />
      <div className={styles.cart}>
        <div className={styles.cartProducts}>
          {cartData.map((item, index) => (
            <ShoopingCartProduct
              key={index}
              {...item}
              removeItem={() => removeCartItem(item._id)}
            />
          ))}
        </div>
        <div className={styles.cartSummary}>
          <h3>Basket</h3>
          <h5>Items: {totalItems}</h5>
          <p className={styles.cartSummary_price}>
            Total price:
            <span> {totalPrice.toFixed(2)} $ </span>
          </p>
          {cartData.length ? (
            <Link to={`/order`}>
              <Button name="Order" className={styles.cardButton} />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ShoopingCart;
