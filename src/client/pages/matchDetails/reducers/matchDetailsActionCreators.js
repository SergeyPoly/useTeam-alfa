import MatchDetailsService from '../services/matchDetails.service';
import { setMatchDetailsData } from './matchDetailsReducer';

import { tournamentTeamsData } from '../../tournamentDetails/tournamentTeamsData'; //DELETE! after back-end fully operational!
import { usersData } from '../../tournamentDetails/usersData'; //DELETE! after back-end fully operational!

const matchDetailsService = new MatchDetailsService();

export const matchDetailsRequestCreator = (id, toggleLoadingStatus) => {
    return async ( dispatch ) => {
        toggleLoadingStatus();
        try {
            await matchDetailsService.getCurrentMatch(id)
                .then((res) => {
                    const data = res.result;
                    //REFACTOR NEXT STEPS after back-end fully operational!
                    const currentMatch = data.result;
                    const responseMatchData = currentMatch.map(element => ({
                        ...element,
                        team: tournamentTeamsData.find(({id}) => id === element.team).name,
                        players: element.players.map(element => ({...element, player: usersData.find(({id})=> id === element.player).name}))
                    }));
                    dispatch(setMatchDetailsData(responseMatchData));
                    toggleLoadingStatus();
                })
        } catch (err) {
            console.log(err);
            toggleLoadingStatus();
        }
    }
};


