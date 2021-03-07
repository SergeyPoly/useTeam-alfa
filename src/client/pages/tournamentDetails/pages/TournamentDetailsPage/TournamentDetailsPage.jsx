import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Sidebar from '../../../../../shared/containers/Sidebar';
import SidebarContentPartners from '../../components/SidebarContentPartners';
import TournamentDetailsContent from '../../components/TournamentDetailsContent/TournamentDetailsContent';
import { setProcessedTournamentData } from '../../reducers/tournamentDetailsReducer';

import styles from './TournamentDetailsPage.module.scss';

import { partnersData } from '../../partnersData'; //DELETE after back-end fully operational!
import { tournamentsData } from '../../../tournaments/tournamentsData'; //DELETE after back-end fully operational!
import { tournamentTeamsData } from '../../tournamentTeamsData'; //DELETE after back-end fully operational!

const TournamentDetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        //REFACTOR NEXT STEPS after back-end fully operational!
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
    }, []);

    const sidebarData = [
        {
            headingText: 'Partners',
            Component: <SidebarContentPartners />
        },
    ];

    return (
        <div className={styles.tournaments_page}>
            <div className={`${styles.tournaments_page__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <TournamentDetailsContent />
                </div>
            </div>
        </div>
    );
};

export default TournamentDetailsPage;
