import React from 'react';
import CarouselTournaments from './components/CarouselTournaments/CarouselTournaments';
import CurrentTournaments from './components/CurrentTournaments/CurrentTournaments';
import { mainPageStyle } from './style';

const MainPage = () => {
    return(
        <div style={mainPageStyle}>
            <CarouselTournaments/>
            <CurrentTournaments/>
        </div>
    )
};

export default MainPage;