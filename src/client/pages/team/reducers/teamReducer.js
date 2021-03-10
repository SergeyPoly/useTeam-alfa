import { createSlice } from '@reduxjs/toolkit';

export const teamSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: true,
        user: {},
        team: {}
    },
    reducers: {
        setTeamData: (state, action) => ({...state, team: {id: action.payload}}),
        // setTeam: (state, action)
    }
})

export const {
    setTeamData
} = teamSlice.actions;
