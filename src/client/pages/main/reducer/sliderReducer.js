import { createSlice } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
  name: 'slider',

  initialState: {
    actualSlide: 0
  },

  reducers: {
    setActualSlide: (state, action) => ({ ...state,actualSlide: action.payload,})
  }
});

export const {
    setActualSlide,
} = sliderSlice.actions;