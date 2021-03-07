import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../../tournamentDetails/components/SidebarContentPartners';
import MatchDetails from '../../components/MatchDetails';
import { setMatchDetailsData } from '../../reducers/matchDetailsReducer';

import styles from './MatchDetailsPage.module.scss'

import { matchesData } from '../../matchesData'; //DELETE after back-end fully operational!
import { usersData } from '../../../tournamentDetails/usersData'; //DELETE after back-end fully operational!
import { tournamentTeamsData } from '../../../tournamentDetails/tournamentTeamsData'; //DELETE after back-end fully operational!

const MatchDetailsPage = () => {
    const {id} = useParams();
    const {partners} = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        //REFACTOR NEXT STEPS after back-end fully operational!
        const currentMatch = matchesData.find(element => element.id === id).result;
        const responseMatchData = currentMatch.map(element => ({
            ...element,
            team: tournamentTeamsData.find(({id}) => id === element.team).name,
            players: element.players.map(element => ({...element, player: usersData.find(({id})=> id === element.player).name}))
        }));
        dispatch(setMatchDetailsData(responseMatchData));
    }, []);

    const sidebarData = [
        {
            headingText: 'Partners',
            Component: <SidebarContentPartners {...partners} />
        },
    ];

    return (
        <div className={styles.page}>
            <div className={`${styles.content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <MatchDetails/>
                </div>
            </div>
        </div>
    );
};

export default MatchDetailsPage;
