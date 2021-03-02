import React from 'react';

import styles from './JoinSoloBlock.module.scss'
import Heading from '../../../../../shared/components/Heading';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import JoinSoloForm from '../JoinSoloForm';
import Button from '../../../../../shared/components/Button';
import {
    setTournamentTeam,
    toggleJoinSoloStatus,
} from '../../reducers/tournamentDetailsReducer';
import { setBalance } from '../../../../navbar/reducer/authReducer';

const JoinSoloBlock = ({entry}) => {
    const dispatch = useDispatch();
    const {avatarImg, name, accountBalance} = useSelector(({auth}) => auth.userData, shallowEqual);
    const {solo} = useSelector(({tournamentDetails}) => tournamentDetails.discount, shallowEqual);
    const tournamentTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentTeam, shallowEqual);
    const {ready, joined, confirmed, disabled} = useSelector(({tournamentDetails}) => tournamentDetails.joinSoloStatus, shallowEqual);
    const discountedEntry = entry - entry*solo/100;

    const tournamentTeamList = tournamentTeam.map(({smallAvatarImg, role}) =>
        <div className={styles.join__team_item}>
            <img className={styles.small_avatar} src={smallAvatarImg} alt="small avatar" />
            <p>{role}</p>
        </div>);

    return (
        <div>
            <Heading type={'block'} text='Join tournament'/>
            <div className={styles.join__container}>
                <div className={styles.join__card}>
                    <h4 className={styles.join__heading}>Join with your team</h4>
                    <p className={styles.join__desription} style={{marginBottom: '10px'}}>Need to invite teammates</p>
                    <div style={{display: 'flex'}}>
                        <div style={{marginRight: '15px'}}>
                            <img className={styles.user_img} src={avatarImg} alt="user avatar" />
                            {(ready || joined) &&
                            <div style={{textAlign: 'center'}}>
                                <Lightening/>
                                <span className={styles.join__entry}>{discountedEntry}</span>
                            </div>}
                        </div>
                        <div>
                            <p className={styles.join__username}>{name}</p>
                            <p className={styles.join__desription}>You’ll get 20% of prize</p>
                            {ready && <JoinSoloForm/>}
                            {(joined || confirmed) &&
                            <div style={{marginBottom: '15px'}}>
                                {tournamentTeamList}
                            </div>}
                            {joined && <div>
                                <Button
                                    text='CONFIRM'
                                    classType='basic'
                                    additionalClass={styles.btn_confirm}
                                    handleClick={()=>{
                                        dispatch(toggleJoinSoloStatus('confirmed'));
                                        const currentBalance = accountBalance - discountedEntry;
                                        dispatch(setBalance(currentBalance.toString()));
                                    }}
                                />
                                <Button
                                    text='CANCEL'
                                    classType='basic'
                                    additionalClass={styles.btn_cancel}
                                    handleClick={()=>{
                                        dispatch(toggleJoinSoloStatus('ready'));
                                        dispatch(setTournamentTeam([]))
                                    }}
                                />
                            </div>}
                            {confirmed &&
                            <div className={styles.join__confirmed}>
                                <span>GO TO DOTA 2 CLIENT</span>
                            </div>}
                            {ready &&
                            <div style={{textAlign: 'center'}}>
                                <span className={styles.join__desription}>{`Save ${solo}%`}</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinSoloBlock;
