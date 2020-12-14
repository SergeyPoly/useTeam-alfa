import React from 'react';
// import Banner from '../../components/Banner/Banner';
import CarouselCurrentTournaments from '../../components/CarouselCurrentTournaments';
import CarouselTournaments from '../../components/CarouselTournaments/CarouselTournaments';
import EnticingBanner from '../../components/EnticingBanner/EnticingBanner';
// import { pageProps } from './pageProps;';
import { mainPageStyle, mainPageStyleContainer } from './style';


const MainPage = () => {
  // const {sectionBanner1, sectionBanner2} = pageProps;
  return (
    <div style={mainPageStyle}>
      <div style={mainPageStyleContainer}>
        <CarouselTournaments/>
        <CarouselCurrentTournaments />
        {/* <SectionBanner title={sectionBanner1.title} text={sectionBanner1.text}>
         <Banner bgImage={sectionBanner1.bg}>
           <InfoList />
          </Banner>
        </SectionBanner>
        <SectionBanner title={sectionBanner2.title} text={sectionBanner2.text}>
         <Banner bgImage={sectionBanner2.bg} />
        </SectionBanner> */}
        <EnticingBanner
          title="Why team better then solo play?"
          text="Create your own team or join to your friends team"
          isUnitAvailable="true"
        />
        <EnticingBanner
          title="Join useTeam Right now"
          text="More than 1000 tournaments every month. Check your skills!"
        />
      </div>
    </div>
  );
};

export default MainPage;
