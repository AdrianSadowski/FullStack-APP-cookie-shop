import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../../features/Button/Button';

import {getProduct, fetchProductById} from '../../../redux/productsRedux';

import styles from './ProductSingle.module.scss';

const Component = ({product, fetchOneProduct}) => {
  fetchOneProduct();
  return (
    <div className={styles.root}>
      {product && (
        <div className={styles.product}>
          <h1>{product.title} </h1>
          <img src={product.image} alt={product.title} />
          <h3>Cena: {product.price}PLN</h3>
          <Button name='Dodaj do koszyka' />
        </div>
      )}
    </div>
  );
};
Component.propTypes = {
  product: PropTypes.object,
  fetchOneProduct: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchProductById(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as ProductSingle,
  Component as ProductSingleComponent,
};
