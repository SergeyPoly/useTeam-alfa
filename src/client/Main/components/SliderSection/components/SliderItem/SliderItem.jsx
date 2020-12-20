import React from 'react';
import './SliderItem.scss';

const SliderItem = ({ elem, displaySlide }) => {
  console.log(displaySlide);
  const style = {
    backgroundImage: `url(${elem.url_for_banner})`,
    visibility: displaySlide,
  };

  return (
    <div className="slider-item" style={style}>
      <h3 className="slider-item--header">{elem.name}</h3>
      <p className="slider-item--description">{elem.description}</p>
      <button type="button">SIgn up</button>
    </div>
  );
};

export default SliderItem;
