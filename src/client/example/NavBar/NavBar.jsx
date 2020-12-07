import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavBar.scss'

const NavBar = props => {
    const { links, classNames } = props;
    const additionalClasses = classNames.join(' ');

    const linkItems = links.map(({ to, label }) => (
        <li className="nav-item" key={label}>
            <NavLink
                exact
                className="nav-link"
                activeClassName="nav-link-active"
                aria-current="page"
                to={to}>
                {label}
            </NavLink>
        </li>
        )
    );

    return (
        <nav>
            <ul className={`base-nav ${additionalClasses}`}>
                {linkItems}
            </ul>
        </nav>
    );
};

export default NavBar;

NavBar.defaultProps = {
    classNames: [],
};

NavBar.propTypes = {
    links: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string),
};

