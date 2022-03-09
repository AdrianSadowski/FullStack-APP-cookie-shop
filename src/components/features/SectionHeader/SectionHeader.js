import React from 'react';
import styles from './SectionHeader.module.scss';
import PropTypes from 'prop-types';

const SectionHeader = ({name}) => {
  return (
    <div className={styles.root}>
      <h1>{name}</h1>
    </div>);
};

SectionHeader.propTypes = {
  name: PropTypes.string.isRequired,
};


export default SectionHeader;
