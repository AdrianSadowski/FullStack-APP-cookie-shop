import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import {getAll, fetchAllProducts} from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';

const Component = ({products, fetchProducts}) => {
  fetchProducts();
  return (
    <div className={styles.root}>
      <h2>Homepage</h2>
      {products.length && (
        <div className={styles.product}>
          {products.map(product => (
            <ProductBox key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
