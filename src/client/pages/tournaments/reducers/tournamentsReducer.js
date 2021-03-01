import { createSlice } from '@reduxjs/toolkit';

export const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState: {
        filterOptions: {
            prizePool: '',
            server: [],
            mode: '',
            slots: '',
        },
        processedTournamentsData: [],
    },
    reducers: {
        setFilterOptions: (state, action) => ({ ...state, filterOptions: action.payload }),
        setProcessedTournamentsData: (state, action) => ({ ...state, processedTournamentsData: action.payload })
    }
});

export const {
    setFilterOptions,
    setProcessedTournamentsData,
} = tournamentsSlice.actions;

