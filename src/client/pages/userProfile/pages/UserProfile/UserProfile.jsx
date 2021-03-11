import React, { useEffect } from 'react';
import Achievements from '../../../team/components/Achievements';
import achievementsProps from '../../../team/components/achievementsProps';
import style from './UserProfile.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Heading from '../../../../../shared/components/Heading';
import Overview from '../../../../../shared/components/Overview';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getOverviewUserProps} from '../../getOverviewUserProps';
import SteamConnection from '../../components/SteamConnection';
import Balance from '../../components/Balance';
import { getTournamentHistory } from '../../../team/components/TornamentHistory/getTournamentHistory';
import {
    setAchievementsUserData,
    setTournamentsHistoryUserData,
} from '../../../../navbar/reducer/authReducer';
import TournamentHistory from '../../components/TornamentHistory';


const UserProfile = () => {

    const user  = useSelector(state => state.auth.user, shallowEqual);
    const winTournaments = user.tournaments.length === 0 ? null : user.tournaments.filter( (tournament) => tournament.result ==="Winner");
    const dispatch = useDispatch();

    useEffect( () =>{
        const tournamentHistoryProps = getTournamentHistory(user.tournaments, user.tournamentHistory.countLoading);
        const achievements = getTournamentHistory(winTournaments, 5);
        dispatch(setTournamentsHistoryUserData(tournamentHistoryProps));
        dispatch(setAchievementsUserData(achievements));
    }, [user.tournamentHistory.countLoading])
    const { tournaments } = user.tournamentHistory;

    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements />
        },
    ];

    return (
        <div className={style.userPage}>
            <div className={`${style.userPage__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <Heading type={"page"} text={"Profile"}/>
                    <Overview {...getOverviewUserProps(user)}/>
                    <SteamConnection connected={user.steam}/>
                    <Balance balance = {user.balance} charge={user.charge}/>
                    <TournamentHistory tournaments={tournaments}/>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
