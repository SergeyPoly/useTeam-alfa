import React, {useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { setTimerData } from '../../reducers/tournamentDetailsReducer';

import styles from './OverviewTimer.module.scss';

const OverviewTimer = ({startTime}) => {
    const {days, minutes, hours, seconds} = useSelector(({tournamentDetails}) => tournamentDetails.timerData, shallowEqual);
    const dispatch = useDispatch();
    const tournamentTime = Date.parse(startTime);

    const timerDiff = () => {
        const currentTime = Date.now();
        let diff = Math.round((tournamentTime-currentTime)/1000);
        let days = Math.floor(diff/(24*60*60));
        diff = diff-(days*24*60*60);
        days = `${days}`;
        let hours = Math.floor(diff/(60*60));
        diff = diff-(hours*60*60);
        hours = hours < 10 ? `0${hours}` : `${hours}`;
        let minutes = Math.floor(diff/(60));
        diff = diff-(minutes*60);
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        let seconds = diff;
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        dispatch(setTimerData({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }))
    };

    useEffect(() => {
        const timer = setInterval(timerDiff, 1000);
        return () => {
            clearInterval(timer)
        };
    });

    return (
        <span className={styles.cell_text}>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</span>
    )
};

export default OverviewTimer;
