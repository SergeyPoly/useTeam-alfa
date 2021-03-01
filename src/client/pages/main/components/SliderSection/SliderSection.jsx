import React, { useEffect, useState } from 'react';
import SliderContainer from './components/SliderContainer';
import { GetTour } from '../../pages/MainPage/pageProps;';
import SliderDots from './components/SliderDots/SliderDots';

const SliderSection = () => {
  const [actualSlide, setActualSlide] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      actualSlide < GetTour('announce').length - 1
        ? setActualSlide(actualSlide + 1)
        : setActualSlide(0);
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
};

export default SliderSection;

