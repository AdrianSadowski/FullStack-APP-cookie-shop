import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../Button/Button';
import {addToCart} from '../../../redux/productsRedux';

import styles from './ProductSingleView.module.scss';

const Component = ({product, addProduct}) => {
  const {title, price, _id, image} = product;

  const addToCartProduct = event => {
    event.preventDefault();
    console.log(product.title, 'dodano do koszyka');

    addProduct({
      _id,
      amount: 1,
      priceSingle: price,
      title,
      image,
    });
  };
  console.log(product.title);

  return (
    <div className={styles.product}>
      <h1>{product.title} </h1>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <h3>Cena: {product.price}PLN</h3>
      <Button name="Dodaj do koszyka" click={addToCartProduct} />
    </div>
  );
};
Component.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.string.isRequired,
  }).isRequired,
  addProduct: PropTypes.func,
};

const mapDispatchToProps = (dispatch, props) => ({
  addProduct: product => dispatch(addToCart(product)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as ProductSingleView,
  Component as ProductSingleViewComponent,
};
