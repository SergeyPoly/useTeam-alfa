import React from 'react';

import './PlayerChargeBar.scss';
import { ReactComponent as ChargeLogo } from '../../../../assets/images/icons/charge-ico.svg';

const PlayerChargeBar = () => {
  const chargeValue = '725';
  const chargeButtonValue = 'RECHARGE';

  return (
    <div className="player-charge-bar">
      <div className="player-charge-bar__wrapper">
        <ChargeLogo />
        {chargeValue}
        <button type="button">{chargeButtonValue}</button>
      </div>
    </div>
  );
};

export default PlayerChargeBar;
