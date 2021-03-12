import React, { useEffect, useState } from 'react';
import { GetTour } from '../../../../pages/main/pages/MainPage/pageProps;';
import SliderContainer from './components/SliderContainer';
import SliderDots from './components/SliderDots/SliderDots';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setActualSlide } from '../../reducer/sliderReducer';

const SliderSection = () => {
  const actualSlide = useSelector(
    ({ slider }) => slider.actualSlide,
    shallowEqual,
  );

  const processedTournamentsData = useSelector(
    ({ tournaments }) => tournaments.processedTournamentsData,
    shallowEqual,
  ).filter(elem=> Math.round(Date.parse(elem.startTime) - Date.now())>0);

  const dispatch = useDispatch();

  useEffect(() => {
    const changeSlide = () => {
      actualSlide < processedTournamentsData.length - 1
        ? dispatch(setActualSlide(actualSlide + 1)) 
        : dispatch(setActualSlide(0));
    };
    const changer = setInterval(changeSlide, 3000);
    return () => clearInterval(changer);
  });

  return (
    <div className="slider-section">
      <SliderContainer actualSlide={actualSlide} />
      <SliderDots setActualSlide={setActualSlide} />
    </div>
  );
}

export default SliderSection;
