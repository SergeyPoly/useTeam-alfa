import { combineReducers } from '@reduxjs/toolkit';
import { tournamentsSlice } from '../../client/pages/tournaments/reducers/tournamentsReducer';
import { authSlice } from '../../client/navbar/reducer/authReducer'
import { tournamentDetailsSlice } from '../../client/pages/tournaments/reducers/tournamentDetailsReducer'
import { apiReducer } from '../../client/pages/main/reducer/ApiReducer';
import { teamSlice } from '../../client/pages/team/reducers/teamReducer';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tournaments: tournamentsSlice.reducer,
    tournamentDetails: tournamentDetailsSlice.reducer,
    team: teamSlice.reducer,
    api:apiReducer
});

export default rootReducer;
