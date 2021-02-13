import React from 'react';
import styles from './TournamentsPage.module.scss'

import Sidebar from '../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../components/SidebarContentPartners';

import mainPartner from '../../../../assets/images/tournaments/partner_main.png';
import subPartner1 from '../../../../assets/images/tournaments/subpartner_1.png';
import subPartner2 from '../../../../assets/images/tournaments/subpartner_2.png';
import subPartner3 from '../../../../assets/images/tournaments/subpartner_3.png';
import TournamentsMainContent from '../../components/TournamentsMainContent';

const TournamentsPage = () => {

    const sidebarData = [
        {
            headingText: 'Partners',
            Component: <SidebarContentPartners
                mainPartner={mainPartner}
                subPartners={[subPartner1, subPartner2, subPartner3]}
            />
        },
    ];

    return (
        <div className={styles.tournaments_page}>
            <div className={`${styles.tournaments_page__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <TournamentsMainContent/>
                </div>
            </div>
        </div>
    );
};

export default TournamentsPage;
