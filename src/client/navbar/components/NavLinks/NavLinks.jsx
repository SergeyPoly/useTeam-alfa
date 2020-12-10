import React from 'react';
import PropTypes from 'prop-types';

import './NavLink.scss';
import { NavLink } from 'react-router-dom';

const links = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/tournaments/',
        label: 'Tournaments',
    },
];

const linksAuth = [
    {
        to: '/',
        label: 'Profile',
    },
    {
        to: '/team/',
        label: 'Team',
    },
    {
        to: '/tournaments/',
        label: 'Tournaments',
    },
];

export const NavLinks = ({isAuth, invited}) => {

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
    ));

    const linkItemsAuth = linksAuth.map(({ to, label }) => (
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
    ));

    return (
        <nav className={invited ? 'invitePoint' : ''}>
            <ul>
                {isAuth ? linkItemsAuth : linkItems}
            </ul>
        </nav>
    );
};

NavLinks.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    invited: PropTypes.bool.isRequired
};
