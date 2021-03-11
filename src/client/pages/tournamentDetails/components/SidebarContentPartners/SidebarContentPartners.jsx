import React from 'react';
import { v4 } from 'uuid';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './SidebarContentPartners.module.scss'

const SidebarContentPartners = () => {
    const partners = useSelector(({partners}) => partners.partnersData, shallowEqual);
    const { title, sub } = partners;

    const subPartnersList = sub.length > 0 ? sub.map(({link, src}) =>
        <a href={link}>
            <img src={src}
             key={v4()}
             alt='sub partner'
             className={styles.sidebar_partners__sub_partner}
            />
        </a>,
    ) : null;

    return (
        <div>
            <h4 className={styles.sidebar_partners__title}>Title partner</h4>
            {title ? <a href={title.link}>
                <img src={title.src} alt='title partner' className={styles.sidebar_partners__main_partner} />
            </a> : null}
            <h4 className={styles.sidebar_partners__title}>Partners</h4>
            {subPartnersList}
        </div>
    );
};

export default SidebarContentPartners;
