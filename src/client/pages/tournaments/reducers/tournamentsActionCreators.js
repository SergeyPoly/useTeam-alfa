import TournamentsService from '../services/tournaments.service';
import { setProcessedTournamentsData } from './tournamentsReducer';
import { setLoadingStatus } from '../../../../app/store/apiReducer';

const tournamentsService = new TournamentsService();

export const tournamentsRequestCreator = (queryProperties) => {
    return async ( dispatch ) => {
        dispatch(setLoadingStatus(true));
        try {
            await tournamentsService.getAllTournaments(queryProperties)
                .then((res) => {
                    dispatch(setProcessedTournamentsData(res.result));
                    dispatch(setLoadingStatus(false));
                })
        } catch (err) {
            console.log(err);
            dispatch(setLoadingStatus(false));
        }
    }
};


