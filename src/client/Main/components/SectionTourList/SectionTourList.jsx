import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionTourList.scss';
import TourCard from './TourCard/TourCard';

const sliderCustom = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const SectionTourList = () => {
  return (
    <div>
      <h2 className="title-style"> Tournaments live </h2>
      <Slider {...sliderCustom}>{TourCard}</Slider>
    </div>
  );
};

export default SectionTourList;
