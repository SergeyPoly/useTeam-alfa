import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Lightening } from '../../../assets/icons/lightening.svg';
import { ReactComponent as Dollar } from '../../../assets/icons/dollar.svg';
import Button from '../Button';

import styles from './TournamentCard.module.scss'

const TournamentCard = ({url_for_card, itemHeading, prizePool, slots, id, entry, startTime}) => {
    const { currencyValue, amount } = prizePool;
    const { engaged, total } = slots;
    const diff = Math.round(Date.parse(startTime) - Date.now());
    const currentStatus = diff < 0 ?
        <span className={styles.item__status_now}>Going right now</span> :
        <span className={styles.item__status_soon}>Coming soon</span>;

    return (
        <div className={styles.item__container}>
            <img src={url_for_card}
                 alt='tournament img'
                 className={styles.item__image}
            />
            <div className={styles.item__tournament_info}>
                <h4 className={styles.item__heading}>{itemHeading}</h4>
                <div className={styles.item__centered}>
                    <span className={styles.item__subtitle}>Prize pool</span>
                    <div>
                        {currencyValue==='energy' ? <Lightening/> : <Dollar className={styles.dollar}/>}
                        <span className={styles.item__prize}>{amount}</span>
                    </div>
                </div>
                {currentStatus}
                <div className={styles.item__centered}>
                    <span className={styles.item__subtitle}>Slots</span>
                    <p className={styles.item__slots}>{`${engaged.length}/${total}`}</p>
                </div>
                <div className={styles.item__btn_wraper}>
                    <NavLink
                        exact
                        to={`/tournaments/${id}`}
                        aria-current="page">
                        <Button
                            text='CHECK IN'
                            additionalClass={styles.item__btn}
                            classType={'basic'}
                        />
                    </NavLink>
                </div>
                <div className={styles.item__centered}>
                    <span className={styles.item__subtitle}>Entry from</span>
                    <div>
                        <Lightening height='11'/>
                        <span className={styles.item__entry}>{entry}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;

TournamentCard.propTypes = {
    url_for_card: PropTypes.string.isRequired,
    itemHeading: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    prizePool: PropTypes.shape({
        currencyValue: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
    }),
    slots: PropTypes.shape({
        engaged: PropTypes.arrayOf(PropTypes.string).isRequired,
        total: PropTypes.string.isRequired,
    }),
};
