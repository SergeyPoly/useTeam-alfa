import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './Balance.module.scss';
import { ReactComponent as ChargeIco } from '../../../../assets/images/userProfile/ico/charge.svg';
import Button from '../../../../shared/components/Button';

const Balance = props => {
  const { charge, money } = props;

  return useMemo(
    () => (
      <div className={styles.balanceContainer}>
        <div className={styles.balanceItem}>
          <ChargeIco />
          <span>{charge}</span>
          <Button
            classType="basic"
            handleClick={() => console.log('RECHARGE')}
            text="RECHARGE"
          />
        </div>
        <div className={styles.balanceItem}>
          <span>{`$${money}`}</span>
          <Button
            classType="basic"
            handleClick={() => console.log('WITHDRAW')}
            text="WITHDRAW"
          />
        </div>
      </div>
    ),
    [charge, money],
  );
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
