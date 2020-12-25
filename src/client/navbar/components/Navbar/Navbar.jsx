import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { setAuthData } from '../reducer/NavbarActionCreators';
import styles from './Navbar.module.scss'
import NavbarMenu from '../NavbarMenu';
import Logo from '../../../../shared/components/Logo';
import Button from '../../../../shared/components/Button';
import ChargeBar from '../ChargeBar';

export const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.navbar.isAuth, shallowEqual); // AJAX data required
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
                    />
                </div>
                <div className={`column-4 ${styles.navbar__wraper}`}>
                    {isAuth ? <ChargeBar/> : null}
                    <Button
                        type={'button'}
                        classType={'basic'}
                        additionalClass={styles.navbar__button}
                        text={text}
                        handleClick={() => dispatch(setAuthData())}
                    />
                </div>
            </div>
        </div>
    );
};
