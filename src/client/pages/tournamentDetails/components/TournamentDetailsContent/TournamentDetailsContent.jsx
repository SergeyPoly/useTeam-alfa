import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Heading from '../../../../../shared/components/Heading';
import OverviewSection from '../OverviewSection';
import TournamentTerms from '../TournamentTerms';
import Modal from '../../../../../shared/containers/Modal';
import StreamSection from '../StreamSection';
import BracketSection from '../BracketSection';
import TeammatesInvitation from '../TeammatesInvitation';
import JoinSection from '../JoinSection';
import {
    toggleInviteModal,
    toggleTermsModal,
} from '../../reducers/tournamentDetailsReducer';

const TournamentDetailsContent = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);
    const {itemHeading, slots} = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const { engaged, total } = slots;
    const termsModalActive = useSelector(({tournamentDetails}) => tournamentDetails.termsModalActive, shallowEqual);
    const inviteModalActive = useSelector(({tournamentDetails}) => tournamentDetails.inviteModalActive, shallowEqual);

    return (
        <main>
            <Heading type={'page'} text={itemHeading}/>
            <OverviewSection />
            {(isAuth && engaged.length < total) && <JoinSection />}
            <StreamSection />
            <BracketSection />
            <Modal isOpen={termsModalActive} toggleModal={() => dispatch(toggleTermsModal())} minWidth={'500px'} minHeight={'300px'}>
                <TournamentTerms />
            </Modal>
            <Modal isOpen={inviteModalActive} toggleModal={() => dispatch(toggleInviteModal())} minWidth={'500px'} >
                <TeammatesInvitation />
            </Modal>
        </main>
    );
};

export default TournamentDetailsContent;

