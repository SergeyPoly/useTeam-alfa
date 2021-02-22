import React from 'react';

import styles from './NoTournamentsItem.module.scss';
import Button from '../../../../shared/components/Button';


const NoTournamentsItem = () => {
    console.log("asdfgdsfg");
    console.log(styles);
    return (
        <div className={styles.noTournamentItems}>
            <p className={styles.noTournamentItems__text}>No tournaments won yet</p>
            <Button
                classType="basic"
                handleClick={() => console.log('FIX IT ACHIEVEMENTS')}
                text="FIX IT"
            />
        </div>
    );
}

export default NoTournamentsItem;
