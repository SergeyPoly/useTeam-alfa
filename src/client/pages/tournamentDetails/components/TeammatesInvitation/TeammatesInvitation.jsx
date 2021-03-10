import React from 'react';
import { v4 } from 'uuid';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
    setTournamentOwnerTeam,
    toggleInviteModal,
    toggleJoinTeamStatus,
} from '../../reducers/tournamentDetailsReducer';
import Button from '../../../../../shared/components/Button';
import Table from '../../../../../shared/containers/Table';
import InviteTableItems from '../InviteTableItems';
import { setSortedTeammates } from '../../../../navbar/reducer/authReducer';

import styles from './TeammatesInvitation.module.scss';

const TeammatesInvitation = () => {
    const dispatch = useDispatch();
    const tournamentOwnerTeam = useSelector(({tournamentDetails}) => tournamentDetails.tournamentOwnerTeam, shallowEqual);
    const team = useSelector(({auth}) => auth.team, shallowEqual);
    const {teammates} = team;

    const sorterName = () => {
        const sorted = [...teammates];
        sorted.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        dispatch(setSortedTeammates(sorted));
    };

    const sorterStatistics = (data) => {
        const sorted = [...teammates];
        sorted.sort((a, b) => a.statistics[data] - b.statistics[data]);
        dispatch(setSortedTeammates(sorted));
    };

    const removeTeammate = (id) => {
        const createdTournamentTeam = [...tournamentOwnerTeam];
        const index = createdTournamentTeam.findIndex(element=>element.id===id);
        createdTournamentTeam.splice(index, 1);
        dispatch(setTournamentOwnerTeam(createdTournamentTeam));
    };

    const teammateItems = tournamentOwnerTeam.map(({ mediumAvatarImg, owner, id }) => owner ?
        <img className={styles.mid_avatar}
             src={mediumAvatarImg}
             alt="small avatar"
             key={v4()}/> :
        <img className={styles.mid_avatar}
             key={v4()}
             src={mediumAvatarImg}
             alt="small avatar"
             style={{cursor: 'pointer'}}
             onClick={()=>removeTeammate(id)}/>,
    );

    const emptySlot = () => <div className={styles.empty_slot} key={v4()}></div>;
    const emptySlots = [];
    if (tournamentOwnerTeam.length < 5) {
        do {
            emptySlots.push(emptySlot());
        } while (emptySlots.length < (5 - tournamentOwnerTeam.length))
    }
    const disabled = tournamentOwnerTeam.length <= 1;
    const additionalClass = disabled ? styles.btn_disabled : styles.btn_active;

    const matchTableData = {
        tableColTitles: [
            {
                name: 'teammates',
                sorter: () => sorterName(),
            },
            {
                name: 'matches',
                sorter: () => sorterStatistics('matches'),
            },
            {
                name: 'tournaments',
                sorter: () => sorterStatistics('tournaments'),
            },
            {
                name: 'cups',
                sorter: () => sorterStatistics('cups'),
            },
            { name: 'invite' },
        ],
    };

    return (
        <div>
            <p className={styles.title}>Invite to tournament</p>
            <div className={styles.items_container}>
                {teammateItems}
                {emptySlots}
                <Button
                    text='ACCEPT'
                    classType='basic'
                    additionalClass={additionalClass}
                    disabled={disabled}
                    handleClick={() => {
                        dispatch(toggleJoinTeamStatus('ready'));
                        dispatch(toggleInviteModal());
                    }}
                />
            </div>
            <div style={{margin: '0 -30px -15px'}}>
                <Table tableData={matchTableData}>
                    <InviteTableItems rowsData={teammates}/>
                </Table>
            </div>
        </div>
    );
};

export default TeammatesInvitation;
