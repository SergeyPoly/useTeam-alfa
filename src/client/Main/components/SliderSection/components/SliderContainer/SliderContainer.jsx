import React from 'react';
import { TournamentsData } from '../../../../pages/MainPage/pageProps;';
import SliderItem from '../SliderItem';
import './SliderContainer.scss';

const SliderContainer = () => {
  const sliderItems = TournamentsData.filter(
    el => el.status === 'announce',
  ).map(elem => {
    return <SliderItem elem={elem} />;
  });

  let sliderLength = sliderItems.length * 1260;
  const style = { width: `${sliderLength}px` };

  return (
    <div className="slider-container">
      <button />
      <div className="slider-items" style={style}>
        {sliderItems}
      </div>
      <button />
    </div>
  );
};

export default SliderContainer;
