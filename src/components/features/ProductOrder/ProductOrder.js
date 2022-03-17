import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddOrder, getAllCart} from '../../../redux/productsRedux';
import { useNavigate  } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import shortid from 'shortid';
import {error} from './errors';

import styles from './ProductOrder.module.scss';

const ProductOrder = () => {
  const cartData = useSelector(state => getAllCart(state));
  const dispatch = useDispatch();
  const confirmOrder = order => dispatch(fetchAddOrder(order));

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [captha, setCaptcha] = useState(false);
  const navigate = useNavigate();
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

  const onSubmit = async (user) => {
    const idOrder = shortid();
    if (cartData.length && captha === true) {
      await confirmOrder({
        idOrder: idOrder,
        user,
        totalPrice,
        cartData,
      });
      navigate(`${idOrder}`, { state: {}, replace: false });
      //navigate do poprawy
    } else {
      console.log(captha);
      console.log(cartData);
      console.log(confirmOrder);
      alert('Error 404. Please try again later.');
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
            <span>First Name</span>
            <input type="text" {...register('firstName', {required: true, maxLength: 80})} />
            {errors.firstName && errors.firstName.type === 'required' && (
              <p>{error.firstName.required}</p>
            )}
            {errors.firstName && errors.firstName.type === 'maxLength' && (
              <p>{error.firstName.maxLength}</p>
            )}
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" {...register('lastName', {required: true, maxLength: 80})} />
            {errors.lastName && errors.lastName.type === 'required' && (
              <p>{error.lastName.required}</p>
            )}
            {errors.lastName && errors.lastName.type === 'maxLength' && (
              <p>{error.lastName.maxLength}</p>
            )}
          </label>
          <label>
            <span>Email Address</span>
            <input
              type="text"
              {...register('Email', {
                required: 'Email jest wymagany',
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.Email && errors.Email.type === 'required' && <p>{error.mail.required}</p>}
            {errors.Email && errors.Email.type === 'pattern' && <p>{error.mail.correct}</p>}
          </label>
          <label>
            <span>Phone number</span>
            <input
              type="tel"
              {...register('Mobile', {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.Mobile && errors.Mobile.type === 'required' && (
              <p>{error.Mobile.required}</p>
            )}
            {errors.Mobile && errors.Mobile.type === 'maxLength' && (
              <p>{error.Mobile.maxLength}</p>
            )}
            {errors.Mobile && errors.Mobile.type === 'minLength' && (
              <p>{error.Mobile.minLength}</p>
            )}
          </label>
          <label>
            <span>Adress</span>
            <input type="text" {...register('Adress', {required: true, maxLength: 100})} />
            {errors.Adress && errors.Adress.type === 'required' && (
              <p>{error.Adress.required}</p>
            )}
            {errors.Adress && errors.Adress.type === 'maxLength' && (
              <p>{error.Adress.required}</p>
            )}
          </label>
          <label>
            <span>City</span>
            <input type="text" {...register('City', {required: true, maxLength: 100})} />
            {errors.City && errors.City.type === 'required' && (
              <p>{error.City.required}</p>
            )}
            {errors.City && errors.City.type === 'maxLength' && (
              <p>{error.City.required}</p>
            )}
          </label>
          <div className={styles.sendForm}>
            <label className={styles.veryfication}>
              <span>veryfication</span>
              <div className={styles.googlecaptha}>
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
