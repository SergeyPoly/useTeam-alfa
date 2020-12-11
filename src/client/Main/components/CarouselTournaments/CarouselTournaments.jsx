import React from 'react';
import { Carousel } from 'antd';
import CarouselTournamentsList from './CarouselTournamentsList';

const CarouselTournaments = () => {
  return (
    <>
      <Carousel autoplay style={{ margin: '0, auto' }}>
        {CarouselTournamentsList}
      </Carousel>
    </>
  );
};

export default CarouselTournaments;
