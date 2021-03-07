import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentFilters from '../../components/SidebarContentFilters';
import TournamentsContent from '../../components/TournamentsContent';

import {tournamentsData} from '../../tournamentsData' //DELETE after back-end fully operational!

import styles from './TournamentsPage.module.scss'
import { setProcessedTournamentsData } from '../../reducers/tournamentsReducer';
import { tournamentsRequestCreator } from '../../reducers/tournamentsActionCreators';

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
        //REFACTOR NEXT STEPS after back-end fully operational!
        // const responseTournamentsData = tournamentsData.map(({ terms, streamSrc, partners, stages, ...rest }) => rest);
        // dispatch(setProcessedTournamentsData(responseTournamentsData));
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
