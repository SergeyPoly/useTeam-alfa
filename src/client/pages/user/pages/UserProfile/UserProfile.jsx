import React, { useEffect } from 'react';
import Achievements from '../../../team/components/Achievements';
import style from './UserProfile.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Heading from '../../../../../shared/components/Heading';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SteamConnection from '../../components/SteamConnection';
import Balance from '../../components/Balance';
import PlayerOverview from '../../components/PlayerOverview';
import TeamUserProfile from '../../components/TeamUserProfile';
import { getTournamentHistory } from '../../../team/components/TornamentHistory/getTournamentHistory';
import {
    setAchievementsUserData,
    setTournamentsHistoryUserData,
} from '../../../../navbar/reducer/authReducer';
import TournamentHistory from '../../components/TournamentHistory';

const UserProfile = () => {

    const user  = useSelector(state => state.auth.user, shallowEqual);
    const {steam, balance, charge} = user;

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
                    <PlayerOverview />
                    <SteamConnection connected={steam}/>
                    <Balance balance = {balance} charge={charge}/>
                    <TeamUserProfile/>
                    <TournamentHistory tournaments={tournaments}/>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
