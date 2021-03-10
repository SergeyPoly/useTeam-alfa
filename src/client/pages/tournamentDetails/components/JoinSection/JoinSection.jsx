import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Heading from '../../../../../shared/components/Heading';
import JoinSoloBlock from '../JoinSoloBlock';
import JoinTeamBlock from '../JoinTeamBlock';

import styles from './JoinSection.module.scss'

const JoinSection = () => {
    const user = useSelector(({auth}) => auth.user, shallowEqual);
    const {tournamentTeams} = user;
    const {slots} = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const { engaged } = slots;
    const {confirmed: soloConfirmed} = useSelector(({tournamentDetails}) => tournamentDetails.joinSoloStatus, shallowEqual);
    const {confirmed: teamConfirmed} = useSelector(({tournamentDetails}) => tournamentDetails.joinTeamStatus, shallowEqual);
    const joinCheck = tournamentTeams.map(element => engaged.includes(element));

    const heading = joinCheck.includes(true) || soloConfirmed || teamConfirmed ?
        <Heading type={'block'} additionalClass={styles.joined} text='YOU JOINED'/> :
        <Heading type={'block'} text='Join tournament'/>;

    return (
        <div>
            {heading}
            {!joinCheck.includes(true) &&
            <div>
                <JoinSoloBlock />
                <JoinTeamBlock />
            </div>}
        </div>
    );
};

export default JoinSection;

