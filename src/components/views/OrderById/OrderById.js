import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {fetchOrderById, getOrder} from '../../../redux/productsRedux';
import OrderSingleView from '../../features/OrderSingleView/OrderSingleView';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './OrderById.module.scss';
const data = {
  image: '../assets/pagenotfound.jpg',
};

const OrderById = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const order = useSelector(state => getOrder(state));
  console.log(order);

  useEffect(() => {
    dispatch(fetchOrderById(id));
  }, [id]);

  if (order === undefined || !order.length) {
    // if can't find order riderect after 5s to main page
    setTimeout(function() {navigate('/', { state: {}, replace: false });},5000);
    return (
      <div className={styles.root}>
        <SectionHeader name={`Can't find order ID: ${id}`} />
        <div>
          <img src={data.image} alt={`Can't find Order`}/>
        </div>
      </div>
    );
  } else
    return (
      <div className={styles.root}>
        <SectionHeader name={`Order id: ${id} `} />
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
