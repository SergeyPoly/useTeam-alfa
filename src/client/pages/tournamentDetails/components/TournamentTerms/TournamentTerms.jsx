import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './TournamentTerms.module.scss';

const TournamentTerms = () => {
    const { terms } = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);

    const termsItems = terms.map(({article, description}) =>
        <div className={styles.item}>
            <p className={styles.article}>{article}</p>
            <span className={styles.description}>{description}</span>
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
