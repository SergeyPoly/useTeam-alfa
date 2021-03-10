import { tournamentsHistoryData } from './tournamentsHistoryData';

const export getTournamentHistory = (tournaments) =>{
    let tournamentHistoryProps=[];
    for (let i = 0; i < team.tournamentHistory.countLoading && i < team.tournaments.length ; i++){
        const {id, ...rest} = team.tournaments[i];
        const  tournament = tournamentsHistoryData.tournamentHistory.find( (tournament) => tournament.id ===id);
        tournamentHistoryProps[i] = {...rest, ...tournament};
    }
}
