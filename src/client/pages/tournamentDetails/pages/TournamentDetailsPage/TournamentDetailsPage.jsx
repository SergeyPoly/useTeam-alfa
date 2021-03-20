import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../components/SidebarContentPartners';
import TournamentDetailsContent from '../../components/TournamentDetailsContent/TournamentDetailsContent';
import { tournamentDetailsRequestCreator } from '../../reducers/tournamentDetailsActionCreators';
import {
    setTournamentOwnerTeam,
    setTournamentSoloTeam,
    toggleJoinSoloStatus,
    toggleJoinTeamStatus,
} from '../../reducers/tournamentDetailsReducer';
import { partnersDataRequestCreator } from '../../../partnership/reducers/partnershipActionCreators';
import { useLoader } from '../../../../../shared/customHooks/useLoader';

import styles from './TournamentDetailsPage.module.scss';

const TournamentDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { isLoading, toggleLoadingStatus } = useLoader();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(tournamentDetailsRequestCreator(id, toggleLoadingStatus));
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
                    {isLoading ?
                        <div className={styles.loader}>
                            <Loader type='TailSpin' color='#567EF7' height={40}
                                    width={40} />
                        </div> :
                        <TournamentDetailsContent />}
                </div>
            </div>
        </div>
    );
};

export default TournamentDetailsPage;
