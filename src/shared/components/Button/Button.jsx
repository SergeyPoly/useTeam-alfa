import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
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
=======
import {types} from "./types"
import './Button.scss'

const Button = props => {
    const { text, type, classType, additionalClass, handleClick, disabled } = props;
    const disabledClass = disabled ? 'button-disabled' : '';
    const className = `button ${types[classType]} ${additionalClass} ${disabledClass}`;

    return (
        <button
            type={type}
            className={className}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
>>>>>>> main
};

export default Button;

Button.defaultProps = {
<<<<<<< HEAD
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
=======
    additionalClass: '',
    type: 'button',
    disabled: false
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'button',
        'submit',
        'reset',
    ]),
    classType: PropTypes.oneOf([
        'basic',
        'outline',
        'inactive',
        'success',
        'alert'
    ]).isRequired,
    additionalClass: PropTypes.string,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool
>>>>>>> main
};
