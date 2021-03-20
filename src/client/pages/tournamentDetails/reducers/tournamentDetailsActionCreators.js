import TournamentDetailsService from '../services/tournamentDetails.service';
import {
    setProcessedTournamentData,
} from './tournamentDetailsReducer';

import { partnersData } from '../partnersData'; //DELETE! after back-end fully operational!
import { tournamentTeamsData } from '../tournamentTeamsData'; //DELETE! after back-end fully operational!

const tournamentDetailsService = new TournamentDetailsService();

export const tournamentDetailsRequestCreator = (id, toggleLoadingStatus) => {
    return async ( dispatch ) => {
        toggleLoadingStatus();
        try {
            await tournamentDetailsService.getCurrentTournament(id)
                .then((res) => {
                    const currentTournament = res.result;
                    // console.log(currentTournament);
                    //REFACTOR NEXT STEPS after back-end fully operational!
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
                    toggleLoadingStatus();
                })
        } catch (err) {
            console.log(err);
            toggleLoadingStatus();
        }
    }
};

export const randomPlayersRequestCreator = (amount, randomTeam, handleResponse) => {
    return async ( dispatch ) => {

        try {
            await tournamentDetailsService.getRandomPlayers(amount)
                .then((res) => {
                    const newRandomTeam = randomTeam.concat(res.result);
                    dispatch(handleResponse(newRandomTeam));

                })
        } catch (err) {
            console.log(err);

        }
    }
};


