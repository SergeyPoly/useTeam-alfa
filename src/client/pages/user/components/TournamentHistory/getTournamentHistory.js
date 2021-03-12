import { tournamentsHistoryData } from './tournamentsHistoryData';

export const getTournamentHistory = (tournaments, countLoading) =>{
    let tournamentHistoryProps=[];
    if (tournaments) {
        for (let i = 0; i < countLoading && i < tournaments.length ; i++){
            const {id, ...rest} = tournaments[i];
            const  tournament = tournamentsHistoryData.tournamentHistory.find( (tournament) => tournament.id ===id);
            tournamentHistoryProps[i] = {...rest, ...tournament};
        }
    }
    return tournamentHistoryProps;
}
