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
        setTournamentsHistoryTeamData: (state,action) =>
            ({...state, team: {...state.team, tournamentHistory: {countLoading: state.team.tournamentHistory.countLoading, tournaments: action.payload}}}),
        setTournamentsHistoryUserData: (state,action) =>
            ({...state, user: {...state.user, tournamentHistory: {countLoading: state.user.tournamentHistory.countLoading, tournaments: action.payload}}}),
        setAchievementsTeamData: (state ,action) =>({...state, team: {...state.team, achievements: action.payload}}),
        setAchievementsUserData: (state ,action) =>({...state, user: {...state.user, achievements: action.payload}}),
        setTournamentsLoadingTeam: (state, action) => ({...state, team: {...state.team, tournamentHistory: {...state.team.tournamentHistory, countLoading: state.team.tournamentHistory.countLoading + action.payload}}}),
        setTournamentsLoadingUser: (state, action) => ({...state, user: {...state.user, tournamentHistory: {...state.user.tournamentHistory, countLoading: state.user.tournamentHistory.countLoading + action.payload}}}),
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
    setTournamentsHistoryUserData,
    setAchievementsTeamData,
    setAchievementsUserData,
    setTournamentsLoadingTeam,
    setTournamentsLoadingUser


} = authSlice.actions;

