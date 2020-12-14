import React from 'react';
import {
  CarouselCurrentTournamentsStyle,
  CarouselCurrentTournamentsTitle,
} from './CarouselCurrentTournamentsStyle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CurrentTournamentCard from './CurrentTournamentCard/CurrentTournamentCard';


const CarouselCurrentTournaments = () => {
  return (
    <div>
      <h2 style={CarouselCurrentTournamentsTitle}> Tournaments live </h2>
      <Slider {...CarouselCurrentTournamentsStyle}>
        {CurrentTournamentCard}
      </Slider>
    </div>
  );
};

export default CarouselCurrentTournaments;
