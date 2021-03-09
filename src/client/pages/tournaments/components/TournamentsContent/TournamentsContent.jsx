import React, {useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Heading from '../../../../../shared/components/Heading';
import TournamentCard from '../TournamentCard';
import {tournamentsData} from '../../tournamentsData' //imitation of back-end response

import styles from './TournamentsContent.module.scss'
import { setProcessedTournamentsData } from '../../reducers/tournamentsReducer';

const TournamentsContent = () => {
    const filterOptions = useSelector(({tournaments}) => tournaments.filterOptions, shallowEqual);
    const processedTournamentsData = useSelector(({tournaments}) => tournaments.processedTournamentsData, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        const responseTournamentsData = tournamentsData.map(({ terms, streamSrc, partners, stages, ...rest }) => rest); //imitation of back-end response
        dispatch(setProcessedTournamentsData(responseTournamentsData));
    }, []);

    const filteredCards = processedTournamentsData.filter(({prizePool, mode, slots, server}) => {
            const prizePoolOption = filterOptions.prizePool ? prizePool.currencyValue === filterOptions.prizePool : true;
            const modeOption = filterOptions.mode ? mode === filterOptions.mode : true;
            const slotsOption = filterOptions.slots ? slots.total === filterOptions.slots : true;
            const serverOption = filterOptions.server.length > 0 ?
                !!(filterOptions.server.find(element => element === server)) :
                true;
            return (prizePoolOption && modeOption && slotsOption && serverOption)
    });
    const tournamentCards = filteredCards.map(element =>
        <div key={element.id} style={{padding: '0 7px 15px'}}>
            <TournamentCard {...element} />
        </div>);

    return (
        <div>
            <Heading type={'page'} text='Dota 2 tournaments'/>
            <div className={styles.wraper}>
                {tournamentCards}
            </div>
        </div>
    );
};

export default TournamentsContent;

