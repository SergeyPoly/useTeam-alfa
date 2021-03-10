import React from 'react';
import Achievements from '../../../team/components/Achievements';
import achievementsProps from '../../../team/components/achievementsProps';
import style from '../../../team/pages/TeamPage/TeamPage.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Heading from '../../../../../shared/components/Heading';
import Overview from '../../../../../shared/components/Overview';
import { shallowEqual, useSelector } from 'react-redux';
import {getOverviewUserProps} from '../../getOverviewUserProps';
import SteamConnection from '../../components/SteamConnection';
import Balance from '../../components/Balance';


const UserProfile = () => {
    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements {...achievementsProps} />
        },
    ];
    const user  = useSelector(state => state.auth.user, shallowEqual);


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
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
