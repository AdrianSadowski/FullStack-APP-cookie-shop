import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
import {getAll} from '../../../redux/productsRedux';
import ProductBox from '../../features/ProductBox/ProductBox';

const Component = ({products}) => {
  return (
    <div className={styles.root}>
      <h2>Homepage</h2>
      {products.length && (
        <div className={styles.product}>
          {products.map(product => (
            <ProductBox key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
