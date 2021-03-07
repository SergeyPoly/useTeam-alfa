import { createSlice } from '@reduxjs/toolkit';


export const partnersSlice = createSlice({
    name: 'partners',
    initialState: {
        status: false,
    },
    reducers: {
        setStatus: (state, action) => ({ ...state, status: action.payload }),
    }
});

export const {
    setStatus,
} = partnersSlice.actions;
