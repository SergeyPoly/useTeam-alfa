import React from 'react';
import { v4 } from 'uuid';
import { shallowEqual, useSelector } from 'react-redux';

import Heading from '../../../../../shared/components/Heading';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import { ReactComponent as Dollar } from '../../../../../assets/icons/dollar.svg';
import BracketCard from '../BracketCard';

import styles from './BracketSection.module.scss';

const BracketSection = () => {
    const { stages, championReward } = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const { currencyValue, amount } = championReward;

    const bracketColTitle = stages.map(({step}) => <span key={v4()}>{step}</span>);
    const bracketColReward = stages.map(({reward}) =>
        <div key={v4()}>
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
        <div key={v4()}>
            {element.map(teamName => <p key={v4()}>{teamName}</p>)}
        </div>
    );

    const emptyCard = () => <div className={styles.bracket__empty} key={v4()}/>;
    const emptyList = (step) => {
        const length = +step.split('/')[1];
        return new Array(length).fill(emptyCard());
    };

    const brackets = stages.map(({ matches, step }) => {
        const innerContent = matches.length > 0 ?
            matches.map(element => <BracketCard {...element} key={v4()}/>) :
            step !== 'FINAL' ?
                emptyList(step) :
                emptyCard();
        return (
            <div style={{ padding: '0 15px' }} key={v4()}>
                {innerContent}
            </div>
        );
    });

    const championBlock = champion.length > 0 ?
        <div className={styles.bracket__champion}>
            <img src={championImg} alt="team avatar"/>
            <p>{champion[0]}</p>
        </div> :
        emptyCard();

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

export default BracketSection;
