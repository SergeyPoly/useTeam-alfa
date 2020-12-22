import React, { useEffect, useState } from 'react';
import SliderContainer from './components/SliderContainer';
import { TournamentsData } from '../../pages/MainPage/pageProps;';
import './SliderSection.scss';
import Button from '../../../../shared/components/Button/Button';

const SliderSection = () => {
  const [actualSlide, setActualSlide] = useState(0);
  const sliderItems = TournamentsData.filter(el => el.status === 'announce');
  const sliderDots = sliderItems.map((elem, index) => {
    return (
      <li>
        <Button
          classType="inactive"
          additionalClass="slider-dots--unit"
          handleClick={() => setActualSlide(index)}
        />
      </li>
    );
  });
  useEffect(() => {
    const changeSlide = () => {
      actualSlide < sliderItems.length - 1
        ? setActualSlide(actualSlide + 1)
        : setActualSlide(0);
    };
    const changer = setInterval(changeSlide, 3000);
    return () => clearInterval(changer);
  });

  return (
    <div className="slider-section">
      <SliderContainer sliderItems={sliderItems} actualSlide={actualSlide} />
      <ul className="slider-dots">{sliderDots}</ul>
    </div>
  );
};

export default SliderSection;
