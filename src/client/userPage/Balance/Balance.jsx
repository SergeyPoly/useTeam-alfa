import React from 'react';
import PropTypes from 'prop-types';

import styles from './Balance.module.scss';
import { ReactComponent as ChargeIco } from '../../../assets/images/userProfile/ico/charge.svg';

const Balance = props => {
  const { charge, money } = props;

  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balanceItem}>
        <ChargeIco />
        <span>{charge}</span>
        <button type="button">RECHARGE</button>
      </div>
      <div className={styles.balanceItem}>
        <span>{`$${money}`}</span>
        <button type="button">WITHDRAW</button>
      </div>
    </div>
  )
};

export default Balance;

Balance.propTypes = {
  charge: PropTypes.string,
  money: PropTypes.string,
};

Balance.defaultProps = {
  charge: '0',
  money: '0',
};
