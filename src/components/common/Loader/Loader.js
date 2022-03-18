import React from 'react';
import styles from './Loader.module.scss';


const Loader = () => {
  const loadingTitle = 'Loading ...';
  return (
    <div className={styles.root}>
      <h1 className={styles.loader_title}>{loadingTitle}</h1>
      <div className={styles.loader_wrapper}>
        <span className={styles.loader}>
          <span className={styles.loader_inner}></span>
        </span>
      </div>
    </div>
  );
};



export default Loader;
