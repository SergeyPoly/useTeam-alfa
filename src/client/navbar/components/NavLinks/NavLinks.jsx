import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavLink.module.scss';
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

const NavLinks = ({isAuth, invited}) => {

    const linkItems = links.map(({ to, label }) => (
        <li className={styles.nav_item} key={label}>
            <NavLink
                exact
                className={styles.nav_link}
                activeClassName={styles.nav_link_active}
                aria-current="page"
                to={to}>
                {label}
            </NavLink>
        </li>
    ));

    const linkItemsAuth = linksAuth.map(({ to, label }) => (
        <li className={styles.nav_item} key={label}>
            <NavLink
                exact
                className={`${styles.nav_link} ${label === 'Profile' && invited ? styles.invitePoint : ''}`}
                activeClassName={styles.nav_link_active}
                aria-current="page"
                to={to}>
                {label}
            </NavLink>
        </li>
    ));

    return (
        <nav>
            <ul>
                {isAuth ? linkItemsAuth : linkItems}
            </ul>
        </nav>
    );
};

export default NavLinks;

NavLinks.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    invited: PropTypes.bool.isRequired
};
