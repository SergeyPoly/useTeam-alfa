import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

const Button = props => {
    const { text, classNames, handleClick } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <button type="button" className={`base-button ${additionalClasses}`} onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;

Button.defaultProps = {
    classNames: [],
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string),
    handleClick: PropTypes.func,
};
