import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = props => {
    const { className, text, img } = props;

    return (
        <Link to='/' className={`logo ${className}`}>
            {img ? <img className="logo-img" src={img} alt={text}/> : null}
            {text ? <span className="logo-text">{text}</span> : null}
        </Link>
    );
};

export default Logo;

Logo.defaultProps = {
    classNames: [],
};

Logo.propTypes = {
    classNames: PropTypes.arrayOf(PropTypes.string),
};
