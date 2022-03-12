import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './ShoopingCartProduct.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {adjustQTY} from '../../../redux/productsRedux';
import {useDispatch} from 'react-redux';

const ShoopingCartProduct = ({_id, title, priceSingle, amount, image, removeItem}) => {
  const dispatch = useDispatch();
  const adJustQTY = (id, value) => dispatch(adjustQTY(id, value));
  const [input, setInput] = useState(amount);

  const onChangeHandler = e => {
    setInput(e.target.value);
    adJustQTY(_id, e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.product_info}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <div className={styles.amount}>
            <input value={input} onChange={onChangeHandler} type="number" min="1" />
            <p>{input}</p>
          </div>
        </div>
        <div className={styles.price_action}>
          <div className={styles.price}>
            <p>
              Cena za sztukę: <span>{priceSingle} </span>
            </p>
            <p>
              Wartość: <span>{(priceSingle * amount).toFixed(2)} PLN</span>
            </p>
          </div>
          <FontAwesomeIcon
            className={styles.action}
            icon={faTrash}
            onClick={() => removeItem(_id)}
          />
        </div>
      </div>
    </div>
  );
};

ShoopingCartProduct.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  priceSingle: PropTypes.string,
  amount: PropTypes.number,
  image: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

export default ShoopingCartProduct;
