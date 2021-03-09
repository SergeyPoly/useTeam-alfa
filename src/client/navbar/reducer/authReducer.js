import { createSlice } from '@reduxjs/toolkit';
import {userProfileData} from '../../pages/userProfile/pages/userProfileData';
import {teamData} from '../../pages/team/teamData';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {},
        team: {}
    },
    reducers: {
        toggleAuthStatus: state => ({ ...state, isAuth: !state.isAuth, user: userProfileData}),
        setTeamData: (state, action) => ({...state, team: {...action.payload}}),
    }
});

export const {
    toggleAuthStatus,
    setTeamData
} = authSlice.actions;

