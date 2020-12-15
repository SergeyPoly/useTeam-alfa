import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Lightening } from '../../../../assets/icons/lightening.svg'
import styles from './ChargeBar.module.scss';

const ChargeBar = ({ accountBalance }) => {
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

ChargeBar.propTypes = {
    className: PropTypes.number.isRequired,
};
