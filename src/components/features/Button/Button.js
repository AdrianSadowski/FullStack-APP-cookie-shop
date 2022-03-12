import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({name, click}) => {


  return (
    <button onClick={click} className={styles.btn}>
      <p>{name}</p>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
