import React from 'react';
import styles from './ProductBox.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProductBox = ({product}) => {
  const {title, price, id, image} = product;
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
      <div className={styles.price}>
        <h3 className="col-6">{price}</h3>
      </div>
      <div className={styles.buttons}>
        <div className={styles.btn}>
          <p>Dodaj do koszyka</p>
        </div>
        <Link to={`/products/${id}`} className={styles.btn}>
          <p>SHOW MORE</p>
        </Link>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductBox;
