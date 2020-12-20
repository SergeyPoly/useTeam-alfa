import React from 'react';
import SliderItem from '../SliderItem';
import './SliderContainer.scss';

const SliderContainer = ({ sliderItems, actualSlide }) => {

  let widthBreakPoints = 1260;
  let sliderLength = sliderItems.length * (widthBreakPoints + 3);

  const style = {
    width: `${sliderLength}px`,
    transform: `translate3d(${-actualSlide * widthBreakPoints}px, 0, 0)`,
  };

  const sliderItemsArr = sliderItems.map((elem, index) => {
    const displaySlide = actualSlide === index ? 'visible ' : 'hidden ';
    return <SliderItem elem={elem} displaySlide={displaySlide} />;
  });

  return (
    <div className="slider-container">
      <div className="slider-items" style={style}>
        {sliderItemsArr}
      </div>
    </div>
  );
};

export default SliderContainer;
