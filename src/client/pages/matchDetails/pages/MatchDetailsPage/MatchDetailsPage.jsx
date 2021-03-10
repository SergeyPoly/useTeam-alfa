import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../../tournamentDetails/components/SidebarContentPartners';
import MatchDetails from '../../components/MatchDetails';

import styles from './MatchDetailsPage.module.scss'

import { matchDetailsRequestCreator } from '../../reducers/matchDetailsActionCreators';

const MatchDetailsPage = () => {
    const {id} = useParams();
    const {partners} = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(matchDetailsRequestCreator(id))

    }, []);

    const sidebarData = [
        {
            headingText: 'Partners',
            Component: <SidebarContentPartners {...partners} />
        },
    ];

    return (
        <div className={styles.page}>
            <div className={`${styles.content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <MatchDetails/>
                </div>
            </div>
        </div>
    );
};

export default MatchDetailsPage;
