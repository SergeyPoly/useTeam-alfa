import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss'

const Heading = props => {
    const { text, classNames } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <h2 className={`base-heading ${additionalClasses}`} >
            {text}
        </h2>
    );
};

export default Heading;

Heading.defaultProps = {
    classNames: [],
};

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    classNames: PropTypes.PropTypes.arrayOf(PropTypes.string),
};

