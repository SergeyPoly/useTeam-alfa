import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './Balance.module.scss';
import { ReactComponent as ChargeIco } from '../../../../../assets/images/userProfile/ico/charge.svg';
import Button from '../../../../../shared/components/Button';
import Heading from '../../../../../shared/components/Heading';

const Balance = props => {
  const { charge, balance } = props;

  return useMemo(
    () => (
        <>
            <Heading type={"block"} text={"Balance"}/>
            <div className={styles.balance}>
                <div className={styles.balance__item}>
                    <div>
                        <ChargeIco />
                        <span className={styles.balance__charge}>{charge}</span>
                    </div>
                    <Button
                        additionalClass={styles.balance__button}
                        classType="basic"
                        handleClick={() => console.log('RECHARGE')}
                        text="RECHARGE"
                    />
                </div>
                <div className={styles.balance__item}>
                    <span>{`$${balance}`}</span>
                    <Button
                        additionalClass={styles.balance__button}
                        classType="basic"
                        handleClick={() => console.log('WITHDRAW')}
                        text="WITHDRAW"
                    />
                </div>
            </div>
        </>
    ),
    [charge, balance],
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
