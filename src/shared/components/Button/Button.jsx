import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss'

const Button = props => {
    const { text, type, classType, additionalClass, handleClick } = props;

    return (
        <button type={type} className={`base-button ${classType} ${additionalClass}`} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    additionalClass: '',
    type: 'button'
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    classType: PropTypes.oneOf([
        'blue-btn',
        'orange-btn',
        'green-btn',
        'inactive-btn',
        'load-btn'
    ]).isRequired,
    additionalClass: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};
