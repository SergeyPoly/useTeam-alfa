import { createSlice } from '@reduxjs/toolkit';
import mainPartner from '../../../../assets/images/tournaments/partner_main.png';
import subPartner1 from '../../../../assets/images/tournaments/subpartner_1.png';
import subPartner2 from '../../../../assets/images/tournaments/subpartner_2.png';
import subPartner3 from '../../../../assets/images/tournaments/subpartner_3.png';

export const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    status: 'title',
    partnersData: {
      title: {
        link: 'http://www.google.com',
        src: mainPartner,
      },
      sub: [
        {
          link: 'http://www.ikea.com',
          src: subPartner3,
        },
      ],
    },
  },
  reducers: {
    setStatus: (state, action) => ({ ...state, status: action.payload }),
    setNewPartner: (state, action) => ({
      ...state,
      partnersData: action.payload,
    }),
  },
});

export const { setStatus, setNewPartner } = partnersSlice.actions;
