import React from 'react';
import Button from '../../../../../../shared/components/Button/Button';
import { GetTour } from '../../../../pages/MainPage/pageProps;';
import './SliderDots.scss';
import PropTypes from 'prop-types';

const SliderDots = ({ setActualSlide }) => {
  const sliderUnit = GetTour('announce').map((elem, index) => {
    return (
      <li key={elem.id}>
        <Button
          classType="inactive"
          additionalClass="slider-dots--unit"
          handleClick={() => setActualSlide(index)}
          text=""
        />
      </li>
    );
  });
  return <ul className="slider-dots">{sliderUnit}</ul>;
};

export default SliderDots;

SliderDots.protoType={
  setActualSlide:PropTypes.func,
}

SliderDots.defaultProps={
  setActualSlide:null
}