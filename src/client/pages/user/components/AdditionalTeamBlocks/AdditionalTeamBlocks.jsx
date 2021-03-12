import React from 'react';

import styles from './AdditionalTeamsBlocks.module.scss';

import Button from '../../../../../shared/components/Button';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import {
    acceptInviteRequestCreator,
} from '../../../../navbar/reducer/authActionCreators';

const AdditionalTeamBlocks = () => {
    const {additionalTeams, _id} = useSelector(({auth}) => auth.user, shallowEqual);
    const dispatch = useDispatch();
    const currentTeam = additionalTeams.length > 0 ? {...additionalTeams[0], invitation: null} : null;
    const body = {
        additionalTeams: currentTeam,
    };
    const additionalTeamsBlocks = additionalTeams.length > 0 ?
        additionalTeams.map(({ id, name, date, invitation, imgSrc }) => {
            const inviteBlock = invitation ? () => {
                const {imgSrc, itemHeading, prizePool} = invitation;
                const {currencyValue, amount} = prizePool;
                return (
                    <div className={styles.invite__container}>
                        <p className={styles.invite__description}>{`${name} invite you to play:`}</p>
                        <p className={styles.invite__subtext}>You’ll get 17.5% of prize</p>
                        <div className={styles.team__wraper}>
                            <div style={{marginRight: '10px'}}>
                                <img className={styles.invite__img} src={imgSrc}
                                     alt="tournament img"/>
                                <div style={{ textAlign: 'center' }}>
                                    <Lightening/>
                                    <span
                                        className={styles.team__leave}>20</span>
                                </div>
                            </div>
                            <div style={{width: '180px'}}>
                                <p className={styles.invite__description}>{itemHeading}</p>
                                <p className={styles.invite__subtext}>Prize pool</p>
                                <div style={{marginBottom: '15px'}}>
                                    <Lightening/>
                                    <span
                                        className={styles.team__leave}>{amount}</span>
                                </div>
                                    <Button text='accept' classType='success'
                                            additionalClass={styles.team__accept_btn}
                                            handleClick={() => dispatch(acceptInviteRequestCreator(_id, body))}
                                    />
                            </div>
                        </div>
                    </div>
                )
                } : () => null;

            return (
                <div className={styles.team__container} key={id}>
                    <div style={{marginRight: '10px'}} >
                        <img className={styles.team__img} src={imgSrc}
                             alt="team avatar"/>
                        <div style={{ textAlign: 'center' }}>
                            <Lightening/>
                            <span
                                className={styles.team__leave}>5</span>
                        </div>
                    </div>
                    <div>
                        <p className={styles.team__description}>{name}</p>
                        <p className={styles.team__sub_text}>{`From ${date}`}</p>
                        <Button text='Leave team' classType='success'
                                additionalClass={styles.team__cancel_btn}/>
                    </div>
                    {inviteBlock()}
                </div>
            )
        }) : null;

    return (
        <>
            {additionalTeamsBlocks}
        </>
    )
}

export default AdditionalTeamBlocks;
