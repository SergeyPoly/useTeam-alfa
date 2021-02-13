import React from 'react';
import { v4 } from 'uuid';

import styles from './ResultTableItems.module.scss';


const ResultTableItems = ({rowsData}) => {

    const tableData = rowsData.map(element =>
        <div className={styles.row} key={v4()}>
            <div className={styles.first_cell}>
                <img src={element.src} alt="small avatar" style={{marginRight: '10px'}}/>
                <span className={styles.text_highlited}>{element.name}</span>
            </div>
            <span className={styles.text_normal}>{element.role}</span>
            <span className={styles.text_normal}>{element.kda}</span>
            <span className={styles.text_normal}>{element.gpmxpm}</span>
            <span className={styles.text_normal}>{element.dmg}</span>
            <span className={styles.text_highlited}>{element.networth}</span>
        </div>
    );

    return (
        <div>
            {tableData}
        </div>
    );
};

export default ResultTableItems;
