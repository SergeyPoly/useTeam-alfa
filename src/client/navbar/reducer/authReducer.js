import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userData: {
            accountBalance: '',
            invited: false
        },
        teamData: {}
    },
    reducers: {
        toggleAuthStatus: state => ({ ...state, isAuth: !state.isAuth }),
        setUserData: (state, action) => ({ ...state, userData: action.payload }),
        setTeamData: (state, action) => ({ ...state, teamData: action.payload }),
        setBalance: (state, action) => ({ ...state, userData: {...state.userData, accountBalance: action.payload}}),
    }
});

export const {
    toggleAuthStatus,
    setUserData,
    setBalance,
    setTeamData
} = authSlice.actions;

