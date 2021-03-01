import React from 'react';

import styles from './TournamentTerms.module.scss';

const TournamentTerms = ({ terms }) => {
    const termsItems = terms.map(element =>
        <div className={styles.item}>
            <p className={styles.article}>{element.article}</p>
            <span className={styles.description}>{element.description}</span>
        </div>,
    );

    return (
        <div>
            <p className={styles.title}>Tournament Terms</p>
            {termsItems}
        </div>
    );
};

export default TournamentTerms;
