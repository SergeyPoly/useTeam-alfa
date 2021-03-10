import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import Heading from '../../../../../shared/components/Heading';
import TournamentCard from '../../../../../shared/components/TournamentCard';

import styles from './TournamentsContent.module.scss'

const TournamentsContent = () => {
    const filterOptions = useSelector(({tournaments}) => tournaments.filterOptions, shallowEqual);
    const processedTournamentsData = useSelector(({tournaments}) => tournaments.processedTournamentsData, shallowEqual);
    const isLoading = useSelector(({api}) => api.isLoading, shallowEqual);

    const filteredCards = processedTournamentsData.filter(({prizePool, mode, slots, server}) => {
            const prizePoolOption = filterOptions.prizePool ? prizePool.currencyValue === filterOptions.prizePool : true;
            const modeOption = filterOptions.mode ? mode === filterOptions.mode : true;
            const slotsOption = filterOptions.slots ? slots.total === filterOptions.slots : true;
            const serverOption = filterOptions.server.length > 0 ?
                !!(filterOptions.server.find(element => element === server)) :
                true;
            return (prizePoolOption && modeOption && slotsOption && serverOption)
    });

    const tournamentCards = filteredCards.map(element => element.id ?
        <div key={element.id} style={{padding: '0 7px 15px'}}>
            <TournamentCard {...element} />
        </div> : null);

    return (
        <div>
            <Heading type={'page'} text='Dota 2 tournaments'/>
            {isLoading &&
            <div className={styles.loader}>
                <Loader type="TailSpin" color="#567EF7" height={40} width={40} />
            </div>}
            {!isLoading &&
            <div className={styles.wraper}>
                {tournamentCards}
            </div>}
        </div>
    );
};

export default TournamentsContent;

