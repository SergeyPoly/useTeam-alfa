import { combineReducers } from '@reduxjs/toolkit';
import { tournamentsSlice } from '../../client/pages/tournaments/reducers/tournamentsReducer';
import { authSlice } from '../../client/navbar/reducer/authReducer'
import { tournamentDetailsSlice } from '../../client/pages/tournaments/reducers/tournamentDetailsReducer'
import { apiReducer } from '../../client/pages/main/reducer/ApiReducer';
import {partnersSlice} from "../../client/pages/Partnership/reducers/partnerReducer";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tournaments: tournamentsSlice.reducer,
    tournamentDetails: tournamentDetailsSlice.reducer,
    api: apiReducer,
    partners: partnersSlice.reducer
});

export default rootReducer;
