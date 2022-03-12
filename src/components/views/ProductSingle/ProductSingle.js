import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getProduct, fetchProductById} from '../../../redux/productsRedux';

import styles from './ProductSingle.module.scss';
import { ProductSingleView } from '../../features/ProductSingleView/ProductSingleView';

const Component = ({product, fetchOneProduct}) => {
  fetchOneProduct();


  return (
    <div className={styles.root}>
      {product && (
        <ProductSingleView product={product} />
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
