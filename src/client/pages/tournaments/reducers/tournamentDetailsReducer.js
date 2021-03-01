import { createSlice } from '@reduxjs/toolkit';

export const tournamentDetailsSlice = createSlice({
    name: 'tournamentDetails',
    initialState: {
        timerData: {
            days: '0',
            hours: '00',
            minutes: '00',
            seconds: '00',
        },
        processedTournamentData: {
            prizePool: {
                currencyValue: '',
                amount: '',
            },
            championReward: {
                currencyValue: '',
                amount: '',
            },
            slots: {
                total: '',
                engaged: []
            },
            terms: [
                {
                    article: '',
                    description: ''
                },
            ],
            partners:
                {
                    title: '',
                    sub: []
                },
            stages: [
                {
                    step: 'FINAL',
                    reward: {
                        currencyValue: '',
                        amount: '',
                    },
                    winners: [],
                    losers: [],
                    matches: []
                }
            ],
        },
        termsModalActive: false,
        matchDetailsModeActive: false,
        matchDetailsData: [],
        discount: {
            solo: '0',
            team: '25',
        },
        userData: {},
        joinStatus: {
            notJoined: true,
            joined: false,
            confirmed: false
        },
    },
    reducers: {
        setTimerData: (state, action) => ({ ...state, timerData: action.payload }),
        setProcessedTournamentData: (state, action) => ({ ...state, processedTournamentData: action.payload }),
        toggleTermsModal: state => ({ ...state, termsModalActive: !state.termsModalActive }),
        toggleMatchDetailsMode: state => ({ ...state, matchDetailsModeActive: !state.matchDetailsModeActive }),
        setMatchDetailsData: (state, action) => ({ ...state, matchDetailsData: action.payload }),
        setUserData: (state, action) => ({ ...state, userData: action.payload }),
        setSoloDiscount: (state, action) => ({ ...state, discount: {...state.discount, solo: action.payload }}),
        changeJoinStatus: (state, action) => ({
            ...state,
            joinStatus: Object.fromEntries(Object.entries(state.joinStatus).map(([key, ]) =>
                (key === action.payload ? [key, true] : [key, false])
            ))
        }),
    }
});

export const {
    setTimerData,
    setProcessedTournamentData,
    toggleTermsModal,
    toggleMatchDetailsMode,
    setMatchDetailsData,
    setUserData,
    setSoloDiscount,
    changeJoinStatus
} = tournamentDetailsSlice.actions;
