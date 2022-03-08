import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({name}) => {
  return (
    <div className={styles.btn}>
      <p>{name}</p>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
