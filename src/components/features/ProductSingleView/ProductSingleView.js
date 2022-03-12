import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../Button/Button';
import {addToCart} from '../../../redux/productsRedux';

import {getProduct, fetchProductById} from '../../../redux/productsRedux';

import styles from './ProductSingle.module.scss';

const Component = ({product, fetchOneProduct, addProduct}) => {
  fetchOneProduct();

  //const {title, price, _id, image} = product;



  const addToCartProduct = event => {
    event.preventDefault();
    console.log(product.title, 'dodano do koszyka');

    // addProduct({
    //   _id,
    //   amount: 1,
    //   priceSingle: price,
    //   title,
    //   image,
    // });
  };
  console.log(product.title);

  return (
    <div className={styles.root}>
      {product.length && (
        <div className={styles.product}>
          <h1>{product.title} </h1>
          <div className={styles.image}>
            <img src={product.image} alt={product.title} />
          </div>
          <h3>Cena: {product.price}PLN</h3>
          <Button
            name="Dodaj do koszyka"
            click={addToCartProduct}
          />
        </div>
      )}
    </div>
  );
};
Component.propTypes = {
  product: PropTypes.object,
  fetchOneProduct: PropTypes.func,
  addProduct: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchProductById(props.match.params.id)),
  addProduct: (product) => dispatch(addToCart(product)),

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as ProductSingle,
  Component as ProductSingleComponent,
};
