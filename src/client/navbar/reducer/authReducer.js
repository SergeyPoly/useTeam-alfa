import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userData: {}
    },
    reducers: {
        toggleAuthStatus: state => ({ ...state, isAuth: !state.isAuth }),
        setUserData: (state, action) => ({ ...state, userData: action.payload }),
        setBalance: (state, action) => ({ ...state, userData: {...state.userData, accountBalance: action.payload}}),
    }
});

export const {
    toggleAuthStatus,
    setUserData,
    setBalance,
} = authSlice.actions;

