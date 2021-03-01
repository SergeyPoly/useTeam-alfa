import React from 'react';
import Button from '../../../../../../shared/components/Button/Button';
import './SliderItem.scss';

const SliderItem = ({ elem, displaySlide }) => {
  const style = {
    backgroundImage: `url(${elem.url_for_banner})`,
    visibility: displaySlide,
  };

  return (
    <div className="slider-item" style={style}>
      <h3 className="slider-item--header">{elem.name}</h3>
      <p className="slider-item--description">{elem.description}</p>
      <Button classType="alert" additionalClass='slider-item--button' text='SIgn up'></Button>
    </div>
  );
};

export default SliderItem;
