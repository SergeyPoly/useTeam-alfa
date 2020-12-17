import React from 'react';
import SliderContainer from './components/SliderContainer';
import { TournamentsData } from '../../pages/MainPage/pageProps;';
import './SliderSection.scss';

const SliderSection = () => {
  const SliderItems = TournamentsData.filter(el => el.status === 'announce');
  let sliderLength = SliderItems.length * 1260;
  const style = { width: `${sliderLength}px` };

  return (
    <div className="slider-section" style={style}>
      <SliderContainer SliderItems={SliderItems} />
    </div>
  );
};

export default SliderSection;
