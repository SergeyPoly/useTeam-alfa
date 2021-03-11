import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../components/SidebarContentPartners';
import TournamentDetailsContent from '../../components/TournamentDetailsContent/TournamentDetailsContent';
import { tournamentDetailsRequestCreator } from '../../reducers/tournamentDetailsActionCreators';

import styles from './TournamentDetailsPage.module.scss';
import {
    setTournamentOwnerTeam,
    setTournamentSoloTeam,
    toggleJoinSoloStatus,
    toggleJoinTeamStatus,
} from '../../reducers/tournamentDetailsReducer';
import { partnersDataRequestCreator } from '../../../partnership/reducers/partnershipActionCreators';

const TournamentDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(tournamentDetailsRequestCreator(id));
        dispatch(partnersDataRequestCreator());
        return () => {
            dispatch(toggleJoinSoloStatus('ready'));
            dispatch(toggleJoinTeamStatus('notReady'));
            dispatch(setTournamentSoloTeam([]));
            dispatch(setTournamentOwnerTeam([]));

        }
    }, []);

    const sidebarData = [
        {
            headingText: 'Partners',
            Component: <SidebarContentPartners />
        },
    ];

    return (
        <div className={styles.tournaments_page}>
            <div className={`${styles.tournaments_page__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <TournamentDetailsContent />
                </div>
            </div>
        </div>
    );
};

export default TournamentDetailsPage;
