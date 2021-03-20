import TournamentsService from '../services/tournaments.service';
import { setProcessedTournamentsData } from './tournamentsReducer';

const tournamentsService = new TournamentsService();

export const tournamentsRequestCreator = (queryProperties, toggleLoadingState) => {
    return async ( dispatch ) => {
        toggleLoadingState();
        try {
            await tournamentsService.getAllTournaments(queryProperties)
                .then((res) => {
                    dispatch(setProcessedTournamentsData(res.result));
                    toggleLoadingState();
                })
        } catch (err) {
            console.log(err);
            toggleLoadingState();
        }
    }
};


