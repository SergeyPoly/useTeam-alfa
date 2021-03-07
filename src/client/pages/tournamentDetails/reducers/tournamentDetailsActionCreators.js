import TournamentDetailsService from '../services/tournamentDetails.service';
import { setLoadingStatus } from '../../../../app/store/apiReducer';
import { setProcessedTournamentData } from './tournamentDetailsReducer';
import { partnersData } from '../partnersData';
import { tournamentTeamsData } from '../tournamentTeamsData';

const tournamentDetailsService = new TournamentDetailsService();

export const tournamentDetailsRequestCreator = (id) => {
    return async ( dispatch ) => {
        dispatch(setLoadingStatus(true));
        try {
            await tournamentDetailsService.getCurrentTournament(id)
                .then((res) => {
                    const currentTournament = res.result;
                    console.log(currentTournament);
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
                    console.log(responseTournamentData);
                    dispatch(setProcessedTournamentData(responseTournamentData));
                    dispatch(setLoadingStatus(false));
                })
        } catch (err) {
            console.log(err);
            dispatch(setLoadingStatus(false));
        }
    }
};


