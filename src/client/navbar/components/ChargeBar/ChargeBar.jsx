import React from 'react';

import { ReactComponent as Lightening } from '../../../../assets/icons/lightening.svg'
import styles from './ChargeBar.module.scss';
import PropTypes from 'prop-types';

const ChargeBar = ({accountBalance}) => {

    return (
        <div className={styles.charge_bar}>
            <div className={styles.charge_bar__wrapper}>
                <Lightening/>
                <span className={styles.charge_bar__account_balance}>{accountBalance}</span>
            </div>
        </div>
    )
};

ChargeBar.propTypes = {
    accountBalance: PropTypes.number.isRequired,
};

export default ChargeBar;
