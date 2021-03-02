import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        toggleAuthStatus: state => ({ ...state, isAuth: !state.isAuth }),
    }
});

export const {
    toggleAuthStatus,
} = authSlice.actions;

