import React from 'react';
import Banner from '../../components/SectionBanner/components/Banner/Banner';
import CarouselCurrentTournaments from '../../components/CarouselCurrentTournaments';
import SliderSection from '../../components/SliderSection';
import CarouselTournaments from '../../components/CarouselTournaments/CarouselTournaments';
import { pageProps } from './pageProps;';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import InfoList from '../../components/SectionBanner/components/InfoList';
import './MainPage.scss';

const MainPage = () => {
  const { sectionBannerEnticing, sectionBannerAdvantage } = pageProps;
  return (
    <div className="main-page">
      <div className="main-page--container">
        <CarouselTournaments />

        <SliderSection />

        <CarouselCurrentTournaments />

        <SectionBanner
          title={sectionBannerEnticing.title}
          text={sectionBannerEnticing.text}>
          <Banner bgImage={sectionBannerEnticing.bg}>
            <InfoList />
          </Banner>
        </SectionBanner>

        <SectionBanner
          title={sectionBannerAdvantage.title}
          text={sectionBannerAdvantage.text}>
          <Banner bgImage={sectionBannerAdvantage.bg} />
        </SectionBanner>
      </div>
    </div>
  );
};

export default MainPage;
