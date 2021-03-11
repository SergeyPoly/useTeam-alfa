import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {},
        team: {}
    },
    reducers: {
        toggleAuthStatus: state => ({ ...state, isAuth: !state.isAuth }),
        setUserData: (state, action) => ({ ...state, user: action.payload }),
        setTeamData: (state, action) => ({ ...state, team: action.payload }),
        setTournamentsHistoryTeamData: (state,action) => ({...state, team: {...state.team, tournamentHistory: action.payload}}),
        setTournamentsLoading: (state, action) => ({...state, team: {...state.team, tournamentHistory: {...state.team.tournamentHistory, countLoading: state.team.tournamentHistory.countLoading + action.payload}}}),
        setBalance: (state, action) => ({ ...state, user: {...state.user, charge: action.payload}}),
        setSortedTeammates: (state, action) => ({ ...state, team: {...state.team, teammates: action.payload } }),
    }
});

export const {
    toggleAuthStatus,
    setUserData,
    setBalance,
    setTeamData,
    setSortedTeammates,
    setTournamentsHistoryTeamData,
    setTournamentsLoading

} = authSlice.actions;

