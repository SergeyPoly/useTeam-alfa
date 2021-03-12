import React from 'react';
import { v4 } from 'uuid';

import styles from './InviteTableItems.module.scss';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setTournamentOwnerTeam } from '../../reducers/tournamentDetailsReducer';


const InviteTableItems = ({rowsData}) => {
    const dispatch = useDispatch();
    const tournamentOwnerTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentOwnerTeam, shallowEqual);
    const addTeammate = (teammate) => {
        if (tournamentOwnerTeam.length < 5) {
            const createdTournamentTeam = [...tournamentOwnerTeam];
            createdTournamentTeam.push(teammate);
            dispatch(setTournamentOwnerTeam(createdTournamentTeam));
        }
    };
    const tableData = rowsData.map(({id, name, avatarImg, statistics}) => {
        const {matches, tournaments, cups} = statistics;
        const alreadyInTeam = tournamentOwnerTeam.find(element=>element.id === id);
        const teammate = {
            id: id,
            avatarImg: avatarImg,
            owner: false
        };
        return (
            <div className={styles.row} key={v4()}>
                <div className={styles.first_cell}>
                    <img src={avatarImg} alt="small avatar" className={styles.avatar} style={{marginRight: '10px'}}/>
                    <span className={styles.text_highlited}>{name}</span>
                </div>
                <div className={styles.cell}>
                    <span className={styles.text_normal}>{matches}</span>
                </div>
                <div className={styles.cell}>
                    <span className={styles.text_normal}>{tournaments}</span>
                </div>
                <div className={styles.cell}>
                    <span className={styles.text_normal}>{cups}</span>
                </div>
                <div className={styles.cell}>
                    {alreadyInTeam ?
                        <span className={styles.text_invitation_inactive}>Invited</span> :
                        <span className={styles.text_invitation_active} onClick={()=>addTeammate(teammate)}>Invite</span>}
                </div>
            </div>
        )});

    return (
        <div>
            {tableData}
        </div>
    );
};

export default InviteTableItems;
