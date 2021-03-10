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
            itemHeading: '',
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
        inviteModalActive: false,
        matchDetailsModeActive: false,
        matchDetailsData: [],
        discount: {
            solo: '0',
            team: '25',
        },
        joinSoloStatus: {
            disabled: false,
            ready: true,
            joined: false,
            confirmed: false,
        },
        joinTeamStatus: {
            disabled: false,
            notReady: true,
            ready: false,
            joined: false,
            confirmed: false,
        },
        joinOption: 'Core',
        tournamentSoloTeam: [],
        tournamentOwnerTeam: [],
    },
    reducers: {
        setTimerData: (state, action) => ({ ...state, timerData: action.payload }),
        setProcessedTournamentData: (state, action) => ({ ...state, processedTournamentData: action.payload }),
        toggleTermsModal: state => ({ ...state, termsModalActive: !state.termsModalActive }),
        toggleInviteModal: state => ({ ...state, inviteModalActive: !state.inviteModalActive }),
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
        toggleJoinTeamStatus: (state, action) => ({
            ...state,
            joinTeamStatus: Object.fromEntries(Object.entries(state.joinTeamStatus).map(([key, ]) =>
                (key === action.payload ? [key, true] : [key, false])
            ))
        }),
        setTournamentSoloTeam: (state, action) => ({ ...state, tournamentSoloTeam: action.payload }),
        setTournamentOwnerTeam: (state, action) => ({ ...state, tournamentOwnerTeam: action.payload }),
    }
});

export const {
    setTimerData,
    setProcessedTournamentData,
    toggleTermsModal,
    toggleInviteModal,
    setSoloDiscount,
    toggleJoinSoloStatus,
    setJoinOption,
    setTournamentSoloTeam,
    setTournamentOwnerTeam,
    toggleJoinTeamStatus,
} = tournamentDetailsSlice.actions;
