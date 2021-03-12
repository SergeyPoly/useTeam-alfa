import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '../../client/navbar/reducer/authReducer';
import { tournamentsSlice } from '../../client/pages/tournaments/reducers/tournamentsReducer';
import { tournamentDetailsSlice } from '../../client/pages/tournamentDetails/reducers/tournamentDetailsReducer';
import { matchDetailsSlice } from '../../client/pages/matchDetails/reducers/matchDetailsReducer';
import { apiSlice } from './apiReducer';
import { sliderSlice } from '../../client/pages/main/reducer/sliderReducer';
import {partnersSlice} from "../../client/pages/partnership/reducers/partnerReducer";

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    tournaments: tournamentsSlice.reducer,
    tournamentDetails: tournamentDetailsSlice.reducer,
    matchDetails: matchDetailsSlice.reducer,
    api: apiSlice.reducer,
    slider:sliderSlice.reducer,
    partners: partnersSlice.reducer

});

export default rootReducer;
