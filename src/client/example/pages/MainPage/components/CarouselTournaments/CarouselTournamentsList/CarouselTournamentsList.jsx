import React from 'react';
import { carouselStyle, styleCarouselDescription, styleCarouselHeader } from './style';
import { TournamentsData } from '../TournamentsData';

const CarouselTournamentsList = TournamentsData.filter((el)=>el.status==='announce').map((elem)=>{
    return (
        <div>
            <div style={carouselStyle(elem.url_for_banner)}>
                <h3 style={styleCarouselHeader}>{elem.name}</h3>
                <p style={styleCarouselDescription}>{elem.description}</p>
                <button type='button'>SIgn up</button>
            </div>
        </div>
    )
})

export default CarouselTournamentsList