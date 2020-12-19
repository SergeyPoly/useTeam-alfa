import React from 'react';
import PropTypes from 'prop-types';

import { types } from './types';

import './Button.scss';

const Button = props => {
  const { text, type, classType, additionalClass, handleClick } = props;
  const className = `button ${types[classType]} ${additionalClass}`;

  return (
    <button type={type} className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  additionalClass: '',
  type: 'button',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classType: PropTypes.oneOf([
    'basic',
    'outline',
    'inactive',
    'success',
    'alert',
  ]).isRequired,
  additionalClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
