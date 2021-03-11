import React from 'react';
import Achievements from '../../../team/components/Achievements';
import achievementsProps from '../../../team/components/achievementsProps';
import style from './UserProfile.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Heading from '../../../../../shared/components/Heading';
import { shallowEqual, useSelector } from 'react-redux';
import SteamConnection from '../../components/SteamConnection';
import Balance from '../../components/Balance';
import PlayerOverview from '../../components/PlayerOverview';
import TeamUserProfile from '../../components/TeamUserProfile';

const UserProfile = () => {

    const user  = useSelector(state => state.auth.user, shallowEqual);
    const {steam, balance, charge} = user;

    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements {...achievementsProps} />
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
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
