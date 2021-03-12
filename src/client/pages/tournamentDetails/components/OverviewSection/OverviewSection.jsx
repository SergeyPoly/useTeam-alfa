import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import Heading from '../../../../../shared/components/Heading';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import { ReactComponent as Dollar } from '../../../../../assets/icons/dollar.svg';
import OverviewTimer from '../OverviewTimer';
import { toggleTermsModal } from '../../reducers/tournamentDetailsReducer';

import styles from './OverviewSection.module.scss';

const OverviewSection = () => {
    const dispatch = useDispatch();
    const {prizePool, server, mode, slots, startTime} = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const { currencyValue, amount } = prizePool;
    const { engaged, total } = slots;

    const colTitles = ['Prize pool', 'Server', 'Mode', 'Slots', 'Tournament starts in', 'Info'];
    const titleColumns = colTitles.map(element => <span key={v4()}>{element}</span>);
    const diff = Math.round(Date.parse(startTime) - Date.now());
    const timerData = diff > 0 ?
        <OverviewTimer startTime={startTime}/> :
        <span className={styles.overview__cell_text}>Live</span>;

    return (
        <div>
            <Heading type={'block'} text='PlayerOverview'/>
            <div className={styles.overview__container}>
                <div className={styles.overview__title}>
                    {titleColumns}
                </div>
                <div className={styles.overview__columns}>
                    <div>
                        {currencyValue === 'energy' ?
                            <Lightening/> :
                            <Dollar className={styles.dollar}/>}
                        <span className={styles.overview__prize}>{amount}</span>
                    </div>
                    <span className={styles.overview__cell_text}>{server}</span>
                    <span className={styles.overview__cell_text}>{mode}</span>
                    <span className={styles.overview__cell_text}>{`${engaged.length}/${total}`}</span>
                    {timerData}
                    <span
                        className={styles.overview__cell_text}
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(toggleTermsModal())}
                    >Terms</span>
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;
