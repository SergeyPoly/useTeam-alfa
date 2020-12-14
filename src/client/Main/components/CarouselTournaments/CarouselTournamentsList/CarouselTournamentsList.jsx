import React from 'react';
import { TournamentsData } from '../../../pages/MainPage/pageProps;';
import {
  carouselStyle,
  styleCarouselDescription,
  styleCarouselHeader,
} from './style';

const CarouselTournamentsList = TournamentsData.filter(
  el => el.status === 'announce',
).map(elem => {
  return (
    <div>
      <div style={carouselStyle(elem.url_for_banner)}>
        <h3 style={styleCarouselHeader}>{elem.name}</h3>
        <p style={styleCarouselDescription}>{elem.description}</p>
        <button type="button">SIgn up</button>
      </div>
    </div>
  );
});

export default CarouselTournamentsList;
