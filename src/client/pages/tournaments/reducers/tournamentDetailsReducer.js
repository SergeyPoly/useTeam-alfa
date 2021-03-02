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
        // userData: {},
        joinSoloStatus: {
            disabled: false,
            ready: true,
            joined: false,
            confirmed: false,
        },
        joinOption: 'Core',
        tournamentTeam: [],
    },
    reducers: {
        setTimerData: (state, action) => ({ ...state, timerData: action.payload }),
        setProcessedTournamentData: (state, action) => ({ ...state, processedTournamentData: action.payload }),
        toggleTermsModal: state => ({ ...state, termsModalActive: !state.termsModalActive }),
        toggleMatchDetailsMode: state => ({ ...state, matchDetailsModeActive: !state.matchDetailsModeActive }),
        setMatchDetailsData: (state, action) => ({ ...state, matchDetailsData: action.payload }),
        setSoloDiscount: (state, action) => ({ ...state, discount: {...state.discount, solo: action.payload }}),
        setJoinOption: (state, action) => ({ ...state, joinOption: action.payload }),
        toggleJoinSoloStatus: (state, action) => ({
            ...state,
            joinSoloStatus: Object.fromEntries(Object.entries(state.joinSoloStatus).map(([key, ]) =>
                (key === action.payload ? [key, true] : [key, false])
            ))
        }),
        setTournamentTeam: (state, action) => ({ ...state, tournamentTeam: action.payload }),
    }
});

export const {
    setTimerData,
    setProcessedTournamentData,
    toggleTermsModal,
    toggleMatchDetailsMode,
    setMatchDetailsData,
    setSoloDiscount,
    toggleJoinSoloStatus,
    setJoinOption,
    setTournamentTeam,
} = tournamentDetailsSlice.actions;
