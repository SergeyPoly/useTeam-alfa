import React from 'react';

import styles from './NoMatchPage.module.scss'

const NoMatchPage = () => {
    return (
        <div className={styles.no_match_page}>
            <h1>404</h1>
            <p>
                NOT FOUND
            </p>
        </div>
    );
};

export { NoMatchPage };
