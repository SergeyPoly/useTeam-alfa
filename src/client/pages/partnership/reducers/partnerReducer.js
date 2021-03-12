import { createSlice } from '@reduxjs/toolkit';
import mainPartner from '../../../../assets/images/tournaments/partner_main.png';
import subPartner1 from '../../../../assets/images/tournaments/subpartner_1.png';
import subPartner2 from '../../../../assets/images/tournaments/subpartner_2.png';
import subPartner3 from '../../../../assets/images/tournaments/subpartner_3.png';

export const partnersSlice = createSlice({
    name: 'partners',
    initialState: {
        status: "title",
        id: '',
        partnersData : {
            title: null,
                // {
                    // link: 'http://www.google.com',
                    // link: '',
                    // src: mainPartner
                    // src: ''
                // },
            sub:
                [
                    // {
                        // link: 'http://www.ikea.com',
                        // link: '',
                        // src: subPartner3
                        // src: ''
                    // },
                ]
        }
    },
    reducers: {
        setStatus: (state, action) => ({ ...state, status: action.payload }),
        setNewPartner: (state, action) => ({
            ...state,
            partnersData: action.payload.partnersData,
            id: action.payload.id
        }),
    }
});

export const { setStatus, setNewPartner } = partnersSlice.actions;
