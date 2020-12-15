import React, { useState } from 'react';

import styles from './Navbar.module.scss'
import NavLinks from '../NavLinks';
import Logo from '../../../../shared/components/Logo';
import Button from '../../../../shared/components/Button';
import ChargeBar from '../ChargeBar';

export const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false); // no data available yet
    const invited = true; // no data available yet
    const accountBalance = 725; // no data available yet
    const text = isAuth ? 'recharge' : 'sign up';

    return (
        <div className={styles.navbar}>
            <div className={`${styles.navbar__content} container`}>
                <div className={'column-3'}>
                    <Logo text={'useTeam'}/>
                </div>
                <div className={'column-6'}>
                    <NavLinks
                        isAuth={isAuth}
                        invited={invited}
                    />
                </div>
                <div className={'column-3'}>
                    <Button
                        type={'button'}
                        classType={'basic'}
                        additionalClass={styles.navbar__button}
                        text={text}
                        handleClick={()=>{setIsAuth(!isAuth)}}
                    />
                    {isAuth ? <ChargeBar accountBalance={accountBalance}/> : null}
                </div>
            </div>
        </div>
    );
};
