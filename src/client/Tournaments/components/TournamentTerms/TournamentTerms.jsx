import React from 'react';
import styles from './TournamentTerms.module.scss';


const TournamentTerms = ({ termsData }) => {

    const termsItems = termsData.map(element =>
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
