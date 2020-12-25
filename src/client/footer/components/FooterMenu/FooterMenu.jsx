import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './FooterMenu.module.scss';
import { links } from './links'

const FooterMenu = () => {

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

    return (
        <nav className={styles.nav_wraper}>
            <ul className={styles.nav}>
                {linkItems}
            </ul>
        </nav>
    );
};

export default FooterMenu;
