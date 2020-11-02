import React from 'react';

import './PlayerChargeBar.scss';
import { ReactComponent as ChargeLogo } from '../../../../assets/images/icons/lightening-ico.svg';
import Button from '../../../../shared/components/Button';

const PlayerChargeBar = () => {
  const chargeValue = '725';
  const chargeButtonValue = 'RECHARGE';
  const moneyValue = '$1000';
  const moneyButtonValue = 'WITHDRAW';

  return (
    <div className="player-charge-bar">
      <div className="player-charge-bar__wrapper">
        <ChargeLogo />
        <span className="player-charge-bar__charge-value">{chargeValue}</span>
        <Button text={chargeButtonValue} />
      </div>

      <div className="player-charge-bar__wrapper">
        <span className="player-charge-bar__charge-value">{moneyValue}</span>
        <Button type="yellow" text={moneyButtonValue} />
      </div>
    </div>
  );
};

export default PlayerChargeBar;
