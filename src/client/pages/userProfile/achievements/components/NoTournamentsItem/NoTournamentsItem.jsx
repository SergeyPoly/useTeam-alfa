import React from 'react';

import styles from './NoTournamentsItem.module.scss';
import Button from '../../../../../../shared/components/Button';


const NoTournamentsItem = () => {

    return (
        <div className={styles.noTournamentItems}>
            <p className={styles.noTournamentItems__text}>No tournaments won yet</p>
            <Button
                classType="basic"
                handleClick={() => console.log('FIX IT ACHIEVEMENTS')}
                text="FIX IT"
                additionalClass={styles.noTournamentItems__button}
            />
        </div>
    );
}

export default NoTournamentsItem;

