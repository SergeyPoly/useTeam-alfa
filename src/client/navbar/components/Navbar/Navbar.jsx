import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import NavbarMenu from '../NavbarMenu';
import Logo from '../../../../shared/components/Logo';
import Button from '../../../../shared/components/Button';
import ChargeBar from '../ChargeBar';
import { setTeamData, toggleAuthStatus, setUserData } from '../../reducer/authReducer';

import styles from './Navbar.module.scss'

import {userProfileData as responseUserData} from '../../../pages/userProfile/pages/userProfileData'; //mocked Navbar logic, remove after back-end fully operational
import { teamData } from '../../../pages/team/teamData'; //mocked Navbar logic, remove after back-end fully operational
import { usersData } from '../../../pages/tournamentDetails/usersData';

export const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);
    const userData = useSelector(({auth}) => auth.user, shallowEqual);
    const {charge, invited} = userData;
    const text = isAuth ? 'recharge' : 'sign up';

    return (
        <div className={styles.navbar}>
            <div className={`${styles.navbar__content} container`}>
                <div className={'column-3'}>
                    <Logo text={'useTeam'}/>
                </div>
                <div className={'column-5'}>
                    <NavbarMenu
                        isAuth={isAuth}
                        invited={invited}
                    />
                </div>
                <div className={`column-4 ${styles.navbar__wraper}`}>
                    {isAuth ? <ChargeBar accountBalance={charge}/> : null}
                    <Button
                        type={'button'}
                        classType={'basic'}
                        additionalClass={styles.navbar__button}
                        text={text}
                        handleClick={() => {
                            dispatch(setUserData(responseUserData)); //mocked Navbar logic, remove after back-end fully operational
                            const responseTeamData = {
                                ...teamData,
                                teammates: teamData.teammates.map(element => usersData.find(({id}) => id === element))
                            };
                            dispatch(setTeamData(responseTeamData)); //mocked Navbar logic, remove after back-end fully operational
                            dispatch(toggleAuthStatus());
                        }}
                    />
                </div>
            </div>
        </div>
    )
};
