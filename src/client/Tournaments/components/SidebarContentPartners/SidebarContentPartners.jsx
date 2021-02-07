import React from 'react';
import { v4 } from 'uuid';

import styles from './SidebarContentPartners.module.scss'

const SidebarContentPartners = ({ mainPartner, subPartners}) => {

    const subPartnersImg = subPartners.map(element =>
        <img src={element}
             key={v4()}
             alt='sub partner'
             className={styles.sidebar_partners__sub_partner}
        />,
    );

    return (
        <div>
            <h4 className={styles.sidebar_partners__title}>Title partner</h4>
            <img src={mainPartner} alt='main partner' className={styles.sidebar_partners__main_partner} />
            <h4 className={styles.sidebar_partners__title}>Partners</h4>
            {subPartnersImg}
        </div>
    );
};

export default SidebarContentPartners;

SidebarContentPartners.defaultProps = {

};

SidebarContentPartners.propTypes = {

};
