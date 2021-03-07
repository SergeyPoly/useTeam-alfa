import { createSlice } from '@reduxjs/toolkit';
import mainPartner from '../../../../assets/images/tournaments/partner_main.png';
import subPartner1 from '../../../../assets/images/tournaments/subpartner_1.png';
import subPartner2 from '../../../../assets/images/tournaments/subpartner_2.png';
import subPartner3 from '../../../../assets/images/tournaments/subpartner_3.png';

export const partnersSlice = createSlice({
    name: 'partners',
    initialState: {
        status: false,
        partnersData : [
            {
                id: '1',
                src: mainPartner
            },
            {
                id: '2',
                src: subPartner1
            },
            {
                id: '3',
                src: subPartner2
            },
            {
                id: '4',
                src: subPartner3
            },
        ]

    },
    reducers: {
        setStatus: (state, action) => ({ ...state, status: action.payload }),
    }
});

export const {
    setStatus,
} = partnersSlice.actions;
