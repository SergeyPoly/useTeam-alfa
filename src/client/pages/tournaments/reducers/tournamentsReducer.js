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
        processedTournamentsData: [
            {
                id: '',
                prizePool: {
                    currencyValue: '',
                    amount: '',
                },
                slots: {
                    engaged: [],
                    total: ''
                }
            },
        ],
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

