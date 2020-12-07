import React from 'react';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = props => {
    const { classNames, logotype } = props;
    const currentLogo = logotype || 'useTeam';
    const additionalClasses = classNames.join(' ');

    return (
        <div className={`base-logo ${additionalClasses}`}>
            <a href='/'>
                {currentLogo}
            </a>
        </div>
    );
};

export default Logo;

Logo.defaultProps = {
    classNames: [],
};

Logo.propTypes = {
    classNames: PropTypes.arrayOf(PropTypes.string),
};
