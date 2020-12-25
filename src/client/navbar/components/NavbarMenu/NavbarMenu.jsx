import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './NavbarMenu.module.scss';
import { links } from './links'
import { linksAuth } from './linksAuth'

const NavbarMenu = ({isAuth}) => {
    const invited = useSelector(state => state.navbar.invited, shallowEqual); // AJAX data required

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
            <ul className={styles.nav}>
                {isAuth ? linkItemsAuth : linkItems}
            </ul>
        </nav>
    );
};

export default NavbarMenu;

NavbarMenu.propTypes = {
    isAuth: PropTypes.bool.isRequired,
};
