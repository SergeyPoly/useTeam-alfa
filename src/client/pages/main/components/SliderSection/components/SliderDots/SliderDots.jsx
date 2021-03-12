import React from 'react';
import Button from '../../../../../../../shared/components/Button/Button';
import './SliderDots.scss';
import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


const SliderDots = ({ setActualSlide }) => {
  const dispatch = useDispatch();
  const processedTournamentsData = useSelector(
    ({ tournaments }) => tournaments.processedTournamentsData,
    shallowEqual,
  ).filter(elem=> Math.round(Date.parse(elem.startTime) - Date.now())>0)

  const sliderUnit = processedTournamentsData.map((elem, index) => {
    return (
      <li key={elem.id}>
        <Button
          classType="inactive"
          additionalClass="slider-dots--unit"
          handleClick={() => dispatch(setActualSlide(index))}
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
