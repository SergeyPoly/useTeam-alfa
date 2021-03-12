import React from 'react';

import styles from './TeamUserProfil.module.scss';

import Button from '../../../../../shared/components/Button';
import { shallowEqual, useSelector } from 'react-redux';
import Heading from '../../../../../shared/components/Heading';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import AdditionalTeamBlocks from '../AdditionalTeamBlocks';

const TeamUserProfile = () => {
    const {invites, additionalTeams, team} = useSelector(({auth}) => auth.user, shallowEqual);

    const ownTeamBlock = team ? () => {
        const { imgSrc, name, date } = team;
        return (
            <div className={styles.team__container}>
                <div style={{marginRight: '10px'}}>
                    <img className={styles.team__img} src={imgSrc}
                         alt="team avatar"/>
                </div>
                <div>
                    <p className={styles.team__description}>{name}</p>
                    <p className={styles.team__sub_text}>{`From ${date}`}</p>
                </div>
            </div>
        );
    } : () => null;

    const noTeamBlock = !team && additionalTeams.length === 0 ?
        <div className={styles.team__container}>
            <div className={styles.team__avatar_empty}></div>
            <div>
                <p className={styles.team__description}>No team yet</p>
            </div>
        </div> : null;

    const inviteBlocks = invites.length > 0 ?
        invites.map(({ id, name, imgSrc }) =>
            <div className={styles.team__container} key={id}>
                <div style={{marginRight: '10px'}}>
                    <img className={styles.team__img} src={imgSrc}
                         alt="team avatar"/>
                </div>
                <div>
                    <p className={styles.team__description}>{name}</p>
                    <p className={styles.team__sub_text}>New invite</p>
                    <Button text='accept' classType='success'
                            additionalClass={styles.team__accept_btn}/>
                    <Button text='cancel' classType='success'
                            additionalClass={styles.team__cancel_btn}/>
                </div>
            </div>) : null;

    return (
        <div>
            <Heading type={"block"} text={"Team"}/>
            <div className={styles.team__wraper}>
                {ownTeamBlock()}
                <AdditionalTeamBlocks/>
                {noTeamBlock}
                {inviteBlocks}
            </div>
        </div>
    )
}

export default TeamUserProfile;
