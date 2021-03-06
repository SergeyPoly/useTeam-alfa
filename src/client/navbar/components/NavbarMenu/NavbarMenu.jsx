import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { links } from './links'
import { linksAuth } from './linksAuth'

import styles from './NavbarMenu.module.scss';

const NavbarMenu = ({isAuth, invited}) => {

    const linkItems = links.map(({ to, text, id }) => (
        <li className={styles.nav_item} key={id}>
            <NavLink
                exact
                className={styles.nav_link}
                activeClassName={styles.nav_link_active}
                aria-current="page"
                to={to}>
                {text}
            </NavLink>
        </li>
    ));

    const linkItemsAuth = linksAuth.map(({ to, text, id }) => (
        <li className={styles.nav_item} key={id}>
            <NavLink
                exact
                className={`${styles.nav_link} ${text === 'Profile' && invited ? styles.invitePoint : ''}`}
                activeClassName={styles.nav_link_active}
                aria-current="page"
                to={to}>
                {text}
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
    invited: PropTypes.bool.isRequired
};
