import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './BracketCard.module.scss'

const BracketCard = ({_id: id, teams}) => {
    const cardContent = teams.map(({ imgSrc, score }) =>
        <div className={styles.item__wraper} key={v4()}>
            <img className={styles.item__img} src={imgSrc} alt="team avatar"/>
            <span
                className={styles.item__score}
                style={{ color: score > 0 ? '#99E47F' : '#F65164' }}
            >{score}</span>
        </div>,
    );

    return (
        <div className={styles.item__container}>
            <NavLink
                exact
                to={`/matches/${id}`}
                aria-current="page">
                {cardContent}
            </NavLink>
        </div>

    );
};

export default BracketCard;

BracketCard.propTypes = {
    id: PropTypes.string.isRequired,
    teams: PropTypes.arrayOf(PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        score: PropTypes.string.isRequired,
    })).isRequired,
};
