import React from 'react';
import Heading from '../../../../../shared/components/Heading';
import Button from '../../../../../shared/components/Button';
import defaultAvatar from  "../../../../../assets/images/team/defaultAvatar.png";
import { v4 } from 'uuid';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './PlayerOverview.module.scss';

const PlayerOverview = () => {
    const user = useSelector(({ auth }) => auth.user, shallowEqual);
    const {avatarImg, name, statistics} = user;

    const img = avatarImg ?
        <img className={styles.overview__avatar} src={avatarImg} alt="player avatar" /> :
        <img className={styles.overview__avatar} src={defaultAvatar} alt="default avatar" />

    const statisticItems = Object.entries(statistics).map(element => (
        <div className={styles.overview__statisticItem} key={v4()}>
            <span className={styles.overview__statisticTitle}>{element[0]}</span>
            <span className={styles.overview__statisticValue}>{element[1]}</span>
        </div>
    ));

    return (
        <div className={styles.overview}>
            <Heading type="block" text="Overview" />
            <div className={styles.overview__block}>
                {img}
                <div className={styles.overview__info}>
                    <div className={styles.overview__nameWrapper}>
                        <span className={styles.overview__name}>{name}</span>
                        <Button text='EDIT PROFILE' classType={"outline"} additionalClass={styles.overview__button}/>
                    </div>
                    <div className={styles.overview__statistic}>
                        {statisticItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerOverview;

