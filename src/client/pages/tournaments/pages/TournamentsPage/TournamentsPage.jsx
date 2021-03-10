import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentFilters from '../../components/SidebarContentFilters';
import TournamentsContent from '../../components/TournamentsContent';
import { tournamentsRequestCreator } from '../../reducers/tournamentsActionCreators';

import styles from './TournamentsPage.module.scss'

const TournamentsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(tournamentsRequestCreator([
            'url_for_card',
            'itemHeading',
            'prizePool',
            'slots',
            'id',
            'entry',
            'startTime',
        ]));
    }, []);

    const sidebarData = [
        {
            headingText: 'Filters',
            Component: <SidebarContentFilters/>
        },
    ];

    return (
        <div className={styles.page}>
            <div className={`${styles.content} container`}>
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
