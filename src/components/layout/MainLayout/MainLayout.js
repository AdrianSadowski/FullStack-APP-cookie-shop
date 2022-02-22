import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

const Component = ({children}) => (
  <div className={ styles.root}>
    <h2>MainLayout</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
