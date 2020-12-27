import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionTourList.scss';
import TourCard from './TourCard/TourCard';
import Heading from '../../../../shared/components/Heading';

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
          <Heading type={'section'} text={'Tournaments live'}/>
          <Slider {...sliderCustom}>{TourCard}</Slider>
      </div>
  );
};

export default SectionTourList;
