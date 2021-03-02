import { combineReducers } from '@reduxjs/toolkit';
import { tournamentsSlice } from '../../client/pages/tournaments/reducers/tournamentsReducer';
import { authSlice } from '../../client/navbar/reducer/authReducer'
import { tournamentDetailsSlice } from '../../client/pages/tournaments/reducers/tournamentDetailsReducer'
import { apiReducer } from '../../client/pages/main/reducer/ApiReducer';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tournaments: tournamentsSlice.reducer,
    tournamentDetails: tournamentDetailsSlice.reducer,
    api:apiReducer
});

export default rootReducer;
