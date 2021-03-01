import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import Heading from '../../../../../shared/components/Heading';

import styles from './TournamentBracket.module.scss';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import { ReactComponent as Dollar } from '../../../../../assets/icons/dollar.svg';
import BracketCard from '../BracketCard';

const TournamentBracket = ({stages, championReward}) => {
    const dispatch = useDispatch();
    const { currencyValue, amount } = championReward;

    const bracketColTitle = stages.map(({step}) => <span key={v4()}>{step}</span>);
    const bracketColReward = stages.map(({reward}) =>
        <div>
            {reward.currencyValue === 'energy' ? <Lightening/> : <Dollar/>}
            <span className={styles[`bracket__reward_${reward.currencyValue}`]}>{reward.amount}</span>
        </div>
    );
    const winTeams = stages.map(({losers}) => losers);
    const champion = stages.find(({step}) => step === 'FINAL').winners;
    winTeams.push(champion);
    const championImg = champion.length > 0 ?
        stages.find(({step}) => step === 'FINAL').matches[0].teams.find(({score}) => score > 0).imgSrc : '';

    const winTeamsList = winTeams.map(element =>
        <div>
            {element.map(teamName => <p>{teamName}</p>)}
        </div>
    );

    const brackets = stages.map(({ matches }) => {
        const innerContent = matches.length > 0 ?
            matches.map(element => <BracketCard {...element}/>) :
            <div style={{ width: '90px' }}/>;

        return (
            <div style={{ padding: '0 15px' }}>
                {innerContent}
            </div>
        );
    });

    const championBlock = champion.length > 0 ?
        <div className={styles.bracket__champion}>
            <img src={championImg} alt="team avatar"/>
            <p>{champion[0]}</p>
        </div> :
        <div style={{ width: '90px' }}/>;

    return (
        <div>
            <Heading type={'block'} text='Tournament Bracket'/>
            <div className={styles.bracket__container} >
                <div className={styles.bracket__col_title} style={{display: 'grid', gridTemplateColumns: `repeat(${bracketColTitle.length+1}, 1fr)`}}>
                    {bracketColTitle}
                    <span>WINNER</span>
                </div>
                <div className={styles.bracket__cards} style={{display: 'grid', gridTemplateColumns: `repeat(${bracketColTitle.length+1}, 1fr)`}}>
                    {brackets}
                    {championBlock}
                </div>
                <div className={styles.bracket__reward} style={{display: 'grid', gridTemplateColumns: `repeat(${bracketColTitle.length+1}, 1fr)`}}>
                    {bracketColReward}
                    <div>
                        {currencyValue === 'energy' ? <Lightening/> : <Dollar/>}
                        <span className={styles[`bracket__reward_${currencyValue}`]}>{amount}</span>
                    </div>
                </div>
                <div className={styles.bracket__win_list} style={{display: 'grid', gridTemplateColumns: `repeat(${bracketColTitle.length+1}, 1fr)`, textAlign: 'center'}}>
                    {winTeamsList}
                </div>
            </div>
        </div>
    );
};

export default TournamentBracket;
