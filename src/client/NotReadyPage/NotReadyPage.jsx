import React from 'react';
import styles from './NotReadyPage.module.scss'

const NotReadyPage = () => {
    return (
        <div className={styles.not_ready_page}>
            <h1>Not ready</h1>
            <p>
                WORK IN PROGRESS
            </p>
        </div>
    );
};

export { NotReadyPage };
