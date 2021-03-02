import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Heading from '../../../../../shared/components/Heading';
import TournamentOverview from '../TournamentOverview';
import TournamentTerms from '../TournamentTerms';
import Modal from '../../../../../shared/containers/Modal';
import { toggleTermsModal } from '../../reducers/tournamentDetailsReducer';
import TournamentStream from '../TournamentStream';
import TournamentBracket from '../TournamentBracket';

import styles from './TournamentDetailsContent.module.scss'
import MatchDetails from '../MatchDetails';
import JoinSoloBlock from '../JoinSoloBlock';

const TournamentDetailsContent = ({itemHeading, terms, streamSrc, stages, championReward, entry, ...rest}) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);
    const termsModalActive = useSelector(({tournamentDetails}) => tournamentDetails.termsModalActive, shallowEqual);
    const matchDetailsModeActive = useSelector(({tournamentDetails}) => tournamentDetails.matchDetailsModeActive, shallowEqual);
    const tournamentContent = !matchDetailsModeActive ?
        <>
            {isAuth && <JoinSoloBlock entry={entry}/>}
            <TournamentStream streamSrc={streamSrc}/>
            <TournamentBracket stages = {stages} championReward = {championReward}/>
        </> : <MatchDetails/>;

    return (
        <div>
            <Heading type={'page'} text={itemHeading}/>
            <TournamentOverview {...rest} />
            <Modal isOpen={termsModalActive} toggleModal={() => dispatch(toggleTermsModal())} minWidth={'500px'} minHeight={'300px'}>
                <TournamentTerms terms={terms} />
            </Modal>
            {tournamentContent}
        </div>
    );
};

export default TournamentDetailsContent;

