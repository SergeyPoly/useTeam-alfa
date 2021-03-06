import React from 'react';

import styles from './NoTournamentsItem.module.scss';
import Button from '../../../../../shared/components/Button';

const NoTournamentsItem = () => (
  <div className={styles.noTournamentItems}>
    <p>No tournaments won yet</p>
    <Button
      classType="basic"
      handleClick={() => console.log('FIX IT ACHIEVEMENTS')}
      text="FIX IT"
      additionalClass={styles.button}
    />
  </div>
);

export default NoTournamentsItem;
