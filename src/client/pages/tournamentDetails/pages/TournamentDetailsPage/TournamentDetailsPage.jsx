import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

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
import Loader from 'react-loader-spinner';

const TournamentDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(({api}) => api.isLoading, shallowEqual);

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
                    {isLoading &&
                    <div className={styles.loader}>
                        <Loader type="TailSpin" color="#567EF7" height={40} width={40} />
                    </div>}
                    {!isLoading &&
                    <TournamentDetailsContent />}
                </div>
            </div>
        </div>
    );
};

export default TournamentDetailsPage;
