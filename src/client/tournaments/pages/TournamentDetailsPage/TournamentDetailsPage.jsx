import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import Sidebar from '../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../components/SidebarContentPartners';
import TournamentDetailsContent from '../../components/TournamentDetailsContent/TournamentDetailsContent';
import { partnersData } from '../../partnersData' //logic rethink needed after back-end fully operational
import { tournamentsData } from '../../tournamentsData'; //logic rethink needed after back-end fully operational
import { usersData } from '../../usersData'; //logic rethink needed after back-end fully operational
import styles from './TournamentDetailsPage.module.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setProcessedTournamentData, setUserData } from '../../reducers/tournamentDetailsReducer';
import { tournamentTeamsData } from '../../tournamentTeamsData';

const TournamentDetailsPage = () => {
    const {id} = useParams();
    const processedTournamentData = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        const currentTournament = tournamentsData.find(element => element.id === id);
        const responseTournamentData = {
            ...currentTournament,
            partners: {
                title: partnersData.find(({id}) => id === currentTournament.partners.title).src,
                sub: currentTournament.partners.sub.map(element => partnersData.find(({id}) => id === element).src)
            },
            stages: currentTournament.stages.map(element => ({
                ...element,
                winners: element.winners.length > 0 ?
                    element.winners.map(element => tournamentTeamsData.find(({id}) => id === element).name) :
                    element.winners,
                losers: element.losers.length > 0 ?
                    element.losers.map(element => tournamentTeamsData.find(({id}) => id === element).name) :
                    element.losers,
                matches: element.matches.map(element =>
                    ({
                            ...element, teams: element.teams.map(element =>
                                ({
                                    ...element,
                                    imgSrc: tournamentTeamsData.find(({ id }) => id === element.imgSrc).smallImgSrc,
                                }),
                            ),
                        }
                    )),
            }))
        };
        dispatch(setProcessedTournamentData(responseTournamentData));
        const currentUser = usersData.find(element => element.id === '1'); //mocked Navbar logic, remove after back-end fully operational
        dispatch(setUserData(currentUser)); //mocked Navbar logic, remove after back-end fully operational
    }, []);

    const { partners, ...rest } = processedTournamentData;
    const sidebarData = [
        {
            headingText: 'Partners',
            Component: <SidebarContentPartners {...partners} />
        },
    ];

    return (
        <div className={styles.tournaments_page}>
            <div className={`${styles.tournaments_page__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <TournamentDetailsContent {...rest} />
                </div>
            </div>
        </div>
    );
};

export default TournamentDetailsPage;
