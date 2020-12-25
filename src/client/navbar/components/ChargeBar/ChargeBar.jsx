import React from 'react';

import { ReactComponent as Lightening } from '../../../../assets/icons/lightening.svg'
import styles from './ChargeBar.module.scss';
import { shallowEqual, useSelector } from 'react-redux';

const ChargeBar = () => {
    const accountBalance = useSelector(state => state.navbar.accountBalance, shallowEqual); // AJAX data required

    return (
        <div className={styles.charge_bar}>
            <div className={styles.charge_bar__wrapper}>
                <Lightening/>
                <span className={styles.charge_bar__account_balance}>{accountBalance}</span>
            </div>
        </div>
    )
};
export default ChargeBar;
