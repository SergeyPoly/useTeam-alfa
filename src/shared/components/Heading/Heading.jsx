import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss'
import { types } from './types';

const Heading = props => {
    const { text, type, additionalClass } = props;
    const { className, Component } = types[type];
    const fullClassName = `heading ${className} ${additionalClass}`;

    return (
        <Component fullClassName={fullClassName}>{text}</Component>
    );
};

export default Heading;

Heading.defaultProps = {
    additionalClass: '',
};

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'page',
        'section',
        'block',
        'sidebar',
    ]).isRequired,
    additionalClass: PropTypes.string,
};

