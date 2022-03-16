import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProduct, fetchProductById} from '../../../redux/productsRedux';

import styles from './ProductSingle.module.scss';
import {ProductSingleView} from '../../features/ProductSingleView/ProductSingleView';

const Component = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => getProduct(state));

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);

  return (
    <div className={styles.root}>
      {product && <ProductSingleView product={product} />}
    </div>
  );
};

export {
  Component as ProductSingle,
  Component as ProductSingleComponent,
};
