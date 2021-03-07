import React, { useEffect } from 'react';
import Button from '../../../../../../../shared/components/Button/Button';
import './SliderItem.scss';

const SliderItem = ({ elem, displaySlide }) => {

  const style = {
    backgroundImage: `url(${elem.url_for_banner})`,
    visibility: displaySlide,
  };

  return (
    <div className="slider-item" style={style}>
      <h3 className="slider-item--header">{elem.itemHeading}</h3>
      <p className="slider-item--description">The first rule of Fight Club is: You do not talk about Fight Club</p>
      <Button
        classType="alert"
        additionalClass="slider-item--button"
        text="SIgn up"></Button>
    </div>
  );
};

export default SliderItem;
