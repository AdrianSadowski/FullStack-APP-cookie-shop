import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './ShoopingCartProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoopingCartProduct = ({id, title, priceSingle, amount, image}) => {
  const [value, setValue] = useState(amount);

  const onChange = (value) => {

    console.log('zmiana ilośći trza dokonczyc');
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
          <div className={styles.amount}>
            <p>Ilość</p>
            <input type='number' value={value} onChange={onChange}/>
          </div>
        </div>
        <FontAwesomeIcon icon={faTrash} onClick={deleteItem} />

        <p>Cena: <span>{priceSingle * amount}</span></p>
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
