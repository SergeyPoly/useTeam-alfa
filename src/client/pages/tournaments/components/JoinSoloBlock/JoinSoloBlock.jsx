import React from 'react';

import styles from './JoinSoloBlock.module.scss'
import Heading from '../../../../../shared/components/Heading';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import JoinSoloForm from '../JoinSoloForm';
import Button from '../../../../../shared/components/Button';
import { changeJoinStatus } from '../../reducers/tournamentDetailsReducer';

const JoinSoloBlock = ({entry}) => {
    const dispatch = useDispatch();
    const {avatarImg, name} = useSelector(({tournamentDetails}) => tournamentDetails.userData, shallowEqual);
    const {solo} = useSelector(({tournamentDetails}) => tournamentDetails.discount, shallowEqual);
    const {notJoined, joined, confirmed} = useSelector(({tournamentDetails}) => tournamentDetails.joinStatus, shallowEqual);
    const discountedEntry = entry - entry*solo/100;
    return (
        <div>
            <Heading type={'block'} text='Join tournament'/>
            <div className={styles.join__container}>
                <div className={styles.join__card}>
                    <h4 className={styles.join__heading}>Join with your team</h4>
                    <p className={styles.join__desription} style={{marginBottom: '10px'}}>Need to invite teammates</p>
                    <div style={{display: 'flex'}}>
                        <div style={{marginRight: '15px'}}>
                            <img className={styles.user_img} src={avatarImg} alt="logo team" />
                            <div style={{textAlign: 'center'}}>
                                <Lightening/>
                                <span className={styles.join__entry}>{discountedEntry}</span>
                            </div>
                        </div>
                        <div>
                            <p className={styles.join__username}>{name}</p>
                            <p className={styles.join__desription}>You’ll get 20% of prize</p>
                            {notJoined && <JoinSoloForm/>}
                            {joined && <Button text='CONFIRM READY' classType='basic' handleClick={()=>dispatch(changeJoinStatus('confirmed'))}/>}
                            {confirmed && <span>GO TO DOTA2 CLIENT</span>}
                            <div style={{textAlign: 'center'}}>
                                <span className={styles.join__desription}>{`Save ${solo}%`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinSoloBlock;
