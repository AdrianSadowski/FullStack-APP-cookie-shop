import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchOrderById, getOrder} from '../../../redux/productsRedux';
import OrderSingleView from '../../features/OrderSingleView/OrderSingleView';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './OrderById.module.scss';

const OrderById = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const order = useSelector(state => getOrder(state));

  useEffect(() => {
    dispatch(fetchOrderById(id));
  }, [id]);
  console.log(order);
  return (
    <div className={styles.root}>
      <SectionHeader name="Zamówienie id: " />
      <div className={styles.order}>
        {order && (
          <div>
            <OrderSingleView order={order} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderById;
