import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.scss';

const Error = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

export default Error;

Error.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
};

Error.defaultProps = {
  children: null,
};
