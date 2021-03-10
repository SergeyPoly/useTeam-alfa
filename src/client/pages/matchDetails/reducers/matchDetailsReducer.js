import { createSlice } from '@reduxjs/toolkit';

export const matchDetailsSlice = createSlice({
    name: 'matchDetails',
    initialState: {
        matchDetailsData: [],
    },
    reducers: {
        setMatchDetailsData: (state, action) => ({ ...state, matchDetailsData: action.payload }),
    }
});

export const {
    setMatchDetailsData,
} = matchDetailsSlice.actions;
