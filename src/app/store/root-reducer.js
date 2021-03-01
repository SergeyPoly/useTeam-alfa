import { combineReducers } from '@reduxjs/toolkit';
import { tournamentsSlice } from '../../client/pages/tournaments/reducers/tournamentsReducer';
import { authSlice } from '../../client/navbar/reducer/authReducer'
import { tournamentDetailsSlice } from '../../client/pages/tournaments/reducers/tournamentDetailsReducer'

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tournaments: tournamentsSlice.reducer,
    tournamentDetails: tournamentDetailsSlice.reducer
});

export default rootReducer;
