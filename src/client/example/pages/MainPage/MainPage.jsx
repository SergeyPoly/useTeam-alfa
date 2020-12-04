import React from 'react';
import CarouselCurrentTournaments from './components/CarouselCurrentTournaments/CarouselCurrentTournaments';
import CarouselTournaments from './components/CarouselTournaments/CarouselTournaments';
import EnticingBanner from './components/EnticingBanner/EnticingBanner';
import { mainPageStyle, mainPageStyleContainer } from './style';

const MainPage = () => {
  return (
    <div style={mainPageStyle}>
      <div style={mainPageStyleContainer}>
        <CarouselTournaments />
        <CarouselCurrentTournaments />
        <EnticingBanner />
      </div>
    </div>
  );
};

export default MainPage;
