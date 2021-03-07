import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '../../client/navbar/reducer/authReducer';
import { tournamentsSlice } from '../../client/pages/tournaments/reducers/tournamentsReducer';
import { tournamentDetailsSlice } from '../../client/pages/tournamentDetails/reducers/tournamentDetailsReducer';
import { matchDetailsSlice } from '../../client/pages/matchDetails/reducers/matchDetailsReducer';
import { apiSlice } from './apiReducer';
import {partnersSlice} from "../../client/pages/Partnership/reducers/partnerReducer";


const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tournaments: tournamentsSlice.reducer,
    tournamentDetails: tournamentDetailsSlice.reducer,
    matchDetails: matchDetailsSlice.reducer,
    api: apiSlice.reducer,
    partners: partnersSlice.reducer
});

export default rootReducer;
