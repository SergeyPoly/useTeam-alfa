import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import NavbarMenu from '../NavbarMenu';
import Logo from '../../../../shared/components/Logo';
import Button from '../../../../shared/components/Button';
import ChargeBar from '../ChargeBar';
import { toggleAuthStatus } from '../../reducer/authReducer';

import styles from './Navbar.module.scss'
import { usersData } from '../../../pages/tournaments/usersData';
import { setUserData } from '../../reducer/authReducer';

export const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);
    const userData = useSelector(({auth}) => auth.userData, shallowEqual);
    const {accountBalance, invited} = userData;
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
                    {isAuth ? <ChargeBar accountBalance={accountBalance}/> : null}
                    <Button
                        type={'button'}
                        classType={'basic'}
                        additionalClass={styles.navbar__button}
                        text={text}
                        handleClick={() => {
                            dispatch(toggleAuthStatus());
                            const currentUser = usersData.find(element => element.id === '1'); //mocked Navbar logic, remove after back-end fully operational
                            dispatch(setUserData(currentUser)); //mocked Navbar logic, remove after back-end fully operational
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
