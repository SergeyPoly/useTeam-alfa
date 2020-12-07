import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

const Button = props => {
    const { text, type, classNames, handleClick } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <button type={type} className={`base-button ${additionalClasses}`} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    classNames: [],
    type: 'button'
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    handleClick: PropTypes.func.isRequired,
};
