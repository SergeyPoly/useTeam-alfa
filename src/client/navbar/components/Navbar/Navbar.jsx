import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import NavbarMenu from '../NavbarMenu';
import Logo from '../../../../shared/components/Logo';
import Button from '../../../../shared/components/Button';
import ChargeBar from '../ChargeBar';
import Modal from '../../../../shared/containers/Modal';
import AuthImitator from '../AuthImitator';
import {
    toggleAuthModalStatus, toggleAuthStatus,
} from '../../reducer/authReducer';

import styles from './Navbar.module.scss'

export const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);
    const authModalActive = useSelector(({auth}) => auth.authModalActive, shallowEqual);
    const userData = useSelector(({auth}) => auth.user, shallowEqual);
    const {charge, invited} = userData;

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
                    {isAuth ?
                        <Button
                            type={'button'}
                            classType={'basic'}
                            additionalClass={styles.navbar__button}
                            text='recharge'
                            handleClick={() => {
                                dispatch(toggleAuthStatus());
                            }}
                        /> :
                        <Button
                            type={'button'}
                            classType={'basic'}
                            additionalClass={styles.navbar__button}
                            text='sign up'
                            handleClick={() => {
                                dispatch(toggleAuthModalStatus());
                            }}
                        />
                    }
                </div>
                <Modal isOpen={authModalActive} toggleModal={() => dispatch(toggleAuthModalStatus())} minWidth={'300px'} minHeight={'200px'} >
                    <AuthImitator/>
                </Modal>
            </div>
        </div>
    )
};
