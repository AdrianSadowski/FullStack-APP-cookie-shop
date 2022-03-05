import React from 'react';
import styles from './ProductBox.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProductBox = ({product}) => {
  const {title, price, _id, image} = product;
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Link to={`/product/${_id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <Link to={`/product/${_id}`} className={styles.title}>
        <p>{title}</p>
      </Link>
      <div className={styles.price}>
        <p className="col-6">{price}</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.btn}>
          <p>Dodaj do koszyka</p>
        </div>
        {/* <Link to={`/products/${id}`} className={styles.btn}>
          <p>SHOW MORE</p>
        </Link> */}
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductBox;
