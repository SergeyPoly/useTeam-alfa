import React from 'react';

import { matchesData } from '../../matchesData'; //logic rethink needed after back-end fully operational
import { tournamentTeamsData } from '../../tournamentTeamsData'; //logic rethink needed after back-end fully operational
import { usersData } from '../../usersData'; //logic rethink needed after back-end fully operational

import styles from './BracketCard.module.scss'
import { useDispatch } from 'react-redux';
import {
    setMatchDetailsData,
    toggleMatchDetailsMode,
} from '../../reducers/tournamentDetailsReducer';

const BracketCard = ({ id, teams }) => {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(toggleMatchDetailsMode());
        const currentMatch = matchesData.find(element => element.id === id).result;
        const responseMatchData = currentMatch.map(element => ({
            ...element,
            team: tournamentTeamsData.find(({id}) => id === element.team).name,
            players: element.players.map(element => ({...element, player: usersData.find(({id})=> id === element.player).name}))
        }));
        dispatch(setMatchDetailsData(responseMatchData));
    };

    const cardContent = teams.map(({ imgSrc, score }) =>
        <div className={styles.item__wraper}>
            <img className={styles.item__img} src={imgSrc} alt="team avatar"/>
            <span
                className={styles.item__score}
                style={{ color: score > 0 ? '#99E47F' : '#F65164' }}
            >{score}</span>
        </div>,
    );

    return (
        <div
            className={styles.item__container}
            onClick={() => handleClick(id)}
        >
            <a href="#top-section">
                {cardContent}
            </a>
        </div>

    );
};

export default BracketCard;
