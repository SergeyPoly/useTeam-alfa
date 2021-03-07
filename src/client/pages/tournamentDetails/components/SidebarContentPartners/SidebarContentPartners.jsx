import React from 'react';
import { v4 } from 'uuid';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './SidebarContentPartners.module.scss'

const SidebarContentPartners = () => {
    const { partners } = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const { title, sub } = partners;

    const subPartnersList = sub.map(element =>
        <img src={element}
             key={v4()}
             alt='sub partner'
             className={styles.sidebar_partners__sub_partner}
        />,
    );

    return (
        <div>
            <h4 className={styles.sidebar_partners__title}>Title partner</h4>
            <img src={title} alt='title partner' className={styles.sidebar_partners__main_partner} />
            <h4 className={styles.sidebar_partners__title}>Partners</h4>
            {subPartnersList}
        </div>
    );
};

export default SidebarContentPartners;
