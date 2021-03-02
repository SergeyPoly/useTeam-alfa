import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR }from './actions/ApiActions';
import { initialState } from './ApiInitialState';

export const apiReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_DATA_PENDING:
            return {...state, isLoading: true}
        case FETCH_DATA_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                TournamentsData: payload.result, 
                }
        case FETCH_DATA_ERROR:
            return {
                ...state, 
                loading: false, 
                errors: payload}
        default:
            return state;
    }
    
}