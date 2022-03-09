import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './ShoopingCartProduct.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';

const ShoopingCartProduct = ({id, title, priceSingle, amount, image}) => {
  const [value, setValue] = useState(amount);

  const onChange = value => {
    setValue(value);
  };
  const onUpArrow = () => {
    if(value === 10) {
      return null;
    } else {
      setValue(value => value + 1);
    }
  };
  const onDownArrow = () => {
    if(value === 1) {
      return null;
    } else {
      setValue(value => value - 1);
    }
  };

  const deleteItem = () => {
    console.log('usuwamy item ');
  };

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.product_info}>
        <div className={styles.title}>
          <h3>{title}</h3>
          {/* <div className={styles.amount}>
            <p>Ilość</p>
            <input type='number' value={value} onChange={onChange}/>
          </div> */}
          <div className={styles.amount}>
            <div className="arrow arrow-up" onClick={onUpArrow} >
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <input value={value} onChange={() => onChange(value)} type="text" />
            <div className="arrow arrow-down" onClick={onDownArrow}> 
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
        </div>
        <div className={styles.price_action}>
          <p className={styles.price}>
            Cena za sztukę: <span>{priceSingle} </span>
            Wartość: <span>{priceSingle * value} PLN</span>
          </p>
          <FontAwesomeIcon className={styles.action} icon={faTrash} onClick={deleteItem} />
        </div>
      </div>
    </div>
  );
};

ShoopingCartProduct.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  priceSingle: PropTypes.number,
  amount: PropTypes.number,
  image: PropTypes.string,
};

export default ShoopingCartProduct;
