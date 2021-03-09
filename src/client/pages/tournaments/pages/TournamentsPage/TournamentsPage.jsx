import React from 'react';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentFilters from '../../components/SidebarContentFilters';
import TournamentsContent from '../../components/TournamentsContent';

import styles from './TournamentsPage.module.scss'

const TournamentsPage = () => {

    const sidebarData = [
        {
            headingText: 'Filters',
            Component: <SidebarContentFilters/>
        },
    ];

    return (
        <div className={styles.tournaments_page}>
            <div className={`${styles.tournaments_page__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <TournamentsContent/>
                </div>
            </div>
        </div>
    );
};

export default TournamentsPage;
