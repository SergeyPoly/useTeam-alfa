import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import { buttonTypes } from './buttoTypes';

const Button = props => {
  const { text, type, className, handleClick } = props;

  const buttonCLassName = `btn ${buttonTypes[type]} ${className}`;

  return (
    <button className={buttonCLassName} onClick={handleClick} type="button">
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'primary',
  className: '',
};
