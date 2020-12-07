import React from 'react';
import PropTypes from 'prop-types';

import './Logo.css';

const Logo = props => {
    const { classNames, href, children } = props;
    const additionalClasses = classNames.join(' ');

    return (
        <div className={`base-logo ${additionalClasses}`}>
            <a href={href}>
                {children}
            </a>
        </div>
    );
};

export default Logo;

Logo.defaultProps = {
    classNames: [],
};

Logo.propTypes = {
    href: PropTypes.string.isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired,
};
