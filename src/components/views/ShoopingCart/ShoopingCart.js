import React, {useEffect, useState} from 'react';
import Button from '../../features/Button/Button';
import ShoopingCartProduct from '../../features/ShoopingCartProduct/ShoopingCartProduct';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './ShoopingCart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCart, removeFromCart } from '../../../redux/productsRedux';
import { Link } from 'react-router-dom';

const ShoopingCart = () => {

  const cartData = useSelector(state => getAllCart(state));
  const dispatch = useDispatch();
  const removeCartItem = productId => dispatch(removeFromCart(productId));

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() =>{
    let items = 0;
    let price = 0;

    cartData.forEach(item => {
      items += item.amount;
      price += item.amount * item.priceSingle;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cartData, totalPrice, totalItems, setTotalItems, setTotalPrice ]);

  return (
    <div className={styles.root}>
      <SectionHeader name="Koszyk" />
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
          <h3>Twój koszyk</h3>
          <h5>Ilość przedmiotów: {totalItems}</h5>
          <p className={styles.cartSummary_price}>
            Całkowita wartość koszyka:
            <span> {totalPrice.toFixed(2)} PLN </span>
          </p>
          <Link to={`/order`}>
            <Button name="Zamów" className={styles.cardButton} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoopingCart;
