import React from 'react';
import styles from './ProductBox.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/productsRedux';

const ProductBox = ({product}) => {
  const {title, price, _id, image} = product;
  console.log(product);

  const dispatch = useDispatch();
  const addProduct = product => dispatch(addToCart(product));


  const addToCartProduct = event => {
    event.preventDefault();
    console.log(title, 'dodano do koszyka');

    addProduct({
      _id,
      amount: 1,
      priceSingle: price,
      title,
      image,
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Link to={`/product/${_id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <Link to={`/product/${_id}`} className={styles.title}>
        <p>{title}</p>
      </Link>
      <div className={styles.price}>
        <p className="col-6">{price}</p>
      </div>
      <div className={styles.buttons}>
        <Button click={addToCartProduct} name="Dodaj do koszyka" />
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductBox;
