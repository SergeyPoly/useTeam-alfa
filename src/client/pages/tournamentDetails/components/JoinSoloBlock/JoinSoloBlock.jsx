import React from 'react';
import { v4 } from 'uuid';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import JoinSoloForm from '../JoinSoloForm';
import Button from '../../../../../shared/components/Button';
import {
    setTournamentSoloTeam,
    toggleJoinSoloStatus, toggleJoinTeamStatus,
} from '../../reducers/tournamentDetailsReducer';
import { setBalance } from '../../../../navbar/reducer/authReducer';

import styles from './JoinSoloBlock.module.scss'

const JoinSoloBlock = () => {
    const dispatch = useDispatch();
    const {avatarImg, name, accountBalance} = useSelector(({auth}) => auth.user, shallowEqual);
    const {entry} = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const {solo} = useSelector(({tournamentDetails}) => tournamentDetails.discount, shallowEqual);
    const tournamentSoloTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentSoloTeam, shallowEqual);
    const {ready, joined, confirmed, disabled} = useSelector(({tournamentDetails}) => tournamentDetails.joinSoloStatus, shallowEqual);
    const discountedEntry = entry - entry*solo/100;
    const headingText = ready || disabled ? 'Join as solo player' : 'As solo player';
    const teamStatusText = ready || disabled ? 'Team will generate randomly' : 'Your team generated';


    const tournamentTeamList = tournamentSoloTeam.map(({smallAvatarImg, role}) =>
        <div className={styles.join__team_item} key={v4()}>
            <img className={styles.small_avatar} src={smallAvatarImg} alt="small avatar" />
            <p>{role}</p>
        </div>);

    return (
        <div className={styles.join__container}>
            <div className={styles.join__card}>
                <h4 className={styles.join__heading}>{headingText}</h4>
                <p className={styles.join__desription}
                   style={{ marginBottom: '10px' }}>{teamStatusText}</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '15px' }}>
                        <img className={styles.user_img} src={avatarImg}
                             alt="user avatar"/>
                        {(ready || joined || disabled) &&
                        <div style={{ textAlign: 'center' }}>
                            <Lightening/>
                            <span
                                className={styles.join__entry}>{discountedEntry}</span>
                        </div>}
                    </div>
                    <div>
                        <p className={styles.join__username}>{name}</p>
                        <p className={styles.join__desription}>You’ll get 20% of
                            prize</p>
                        {(ready || disabled) && <JoinSoloForm disabled={disabled}/>}
                        {(joined || confirmed) &&
                        <div style={{ marginBottom: '35px' }}>
                            {tournamentTeamList}
                        </div>}
                        {joined && <div>
                            <Button
                                text='CONFIRM'
                                classType='basic'
                                additionalClass={styles.btn_confirm}
                                handleClick={() => {
                                    dispatch(toggleJoinSoloStatus('confirmed'));
                                    const currentBalance = accountBalance - discountedEntry;
                                    dispatch(setBalance(currentBalance.toString()));
                                }}
                            />
                            <Button
                                text='CANCEL'
                                classType='basic'
                                additionalClass={styles.btn_cancel}
                                handleClick={() => {
                                    dispatch(toggleJoinSoloStatus('ready'));
                                    dispatch(toggleJoinTeamStatus('notReady'));
                                    dispatch(setTournamentSoloTeam([]));
                                }}
                            />
                        </div>}
                        {confirmed &&
                        <div className={styles.join__confirmed}>
                            <span>GO TO DOTA 2 CLIENT</span>
                        </div>}
                        {(ready || disabled) &&
                        <div style={{ textAlign: 'center' }}>
                            <span
                                className={styles.join__desription}>{`Save ${solo}%`}</span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinSoloBlock;
