import React from 'react';
import { v4 } from 'uuid';

import styles from './ResultTableItems.module.scss';


const ResultTableItems = ({rowsData}) => {

    const tableData = rowsData.map(({src, player, role, kda, gpmxpm, dmg, networth}) =>
        <div className={styles.row} key={v4()}>
            <div className={styles.first_cell}>
                <img src={src} alt="small avatar" style={{marginRight: '10px'}}/>
                <span className={styles.text_highlited}>{player}</span>
            </div>
            <span className={styles.text_normal}>{role}</span>
            <span className={styles.text_normal}>{kda}</span>
            <span className={styles.text_normal}>{gpmxpm}</span>
            <span className={styles.text_normal}>{dmg}</span>
            <span className={styles.text_highlited}>{networth}</span>
        </div>
    );

    return (
        <div>
            {tableData}
        </div>
    );
};

export default ResultTableItems;
