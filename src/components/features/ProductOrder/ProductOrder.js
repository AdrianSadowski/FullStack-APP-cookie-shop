import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createOrder, getAllCart} from '../../../redux/productsRedux';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './ProductOrder.module.scss';

const ProductOrder = () => {
  let navigate = useNavigate();
  const cartData = useSelector(state => getAllCart(state));
  const dispatch = useDispatch();
  const confirmOrder = order => dispatch(createOrder(order));

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [captha, setCaptcha] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartData.forEach(item => {
      items += item.amount;
      price += item.amount * item.priceSingle;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cartData, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  const data = {
    inputErrorInfo: 'Proszę wypełnić powyższe pole',
    order: `Zamówiłeś ${totalItems} produktów`,
    priceAll: `Wartość twojego zamówienia: ${totalPrice.toFixed(2)} PLN`,
  };

  const onSubmit = async (data) => {
    if (captha === true) {
      await confirmOrder({
        data,
        totalPrice,
        cartData,
      });
      navigate('/', {replace: true});
    } else {
      alert('Brak weryfikacji');
    }
  };
  return (
    <div className={styles.root}>
      <div>
        <h1>{data.order}</h1>
        <p>{data.priceAll}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <label>
            <span>Imię i Nazwisko</span>
            <input type="text" {...register('Name', {required: true, maxLength: 80})} />
            {errors.Name?.type === 'required' && data.inputErrorInfo}
          </label>
          <label>
            <span>E-mail</span>
            <input type="text" {...register('Email', {required: true, pattern: /^\S+@\S+$/i})} />
            {errors.Email?.type === 'required' && data.inputErrorInfo}
          </label>
          <label>
            <span>Numer telefonu</span>
            <input
              type="tel"
              {...register('Mobile', {required: true, minLength: 6, maxLength: 12})}
            />
            {errors.Mobile?.type === 'required' && data.inputErrorInfo}
          </label>
          <label>
            <span>Adres</span>
            <input type="text" {...register('Tittle', {required: true, maxLength: 100})} />
            {errors.Tittle?.type === 'required' && data.inputErrorInfo}
          </label>
          <div className={styles.sendForm}>
            <label className={styles.veryfication}>
              <span>weryfikacja</span>
              <div className={styles.google - captha}>
                <ReCAPTCHA
                  sitekey="6Lf_yKgeAAAAABkoFCKyJO01ietAV531d_9yJdrF"
                  onChange={e => setCaptcha(!captha)}
                  onExpired={e => setCaptcha(false)}
                />
                ,
              </div>
            </label>
            <div className={styles.formButtons}>
              <button type="reset" className={styles.reset}>
                Wyczyść
              </button>
              <button type="submit" className={styles.submit}>
                Wyślij
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductOrder;
